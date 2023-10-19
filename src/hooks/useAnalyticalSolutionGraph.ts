import { besselj } from "bessel";
import { SchemeUtil } from "@/util/scheme";
import { μ } from "@/constants.ts/besselConstants";

interface IProps {
  I: number;
  K: number;
  k: number; // Номер временного слоя
}

/**
 * Хук для вычисления аналитического решения
 * @returns график аналитического решения
 */
export const useAnalyticalSolutionGraph = ({ I, K, k }: IProps) => {
  const GPAPH_LABEL = "Аналитическое решение";
  const { R, kT, c, alpha, beta, l, h_t, createRAxis } = SchemeUtil;
  const n = 30; // Кол-во членов ряда Фурье

  const Ф = (N: number) => {
    return (60 * beta * R) / (Math.PI * kT * N);
  };

  const J_n = (x: number, N: number) => {
    return besselj(x, N);
  };

  const λ = (i: number) => {
    return (-Math.pow(μ[i], 2) * kT) / Math.pow(R, 2) - (2 * alpha) / l;
  };

  const B = (i: number) => {
    if (i === 0) {
      if (R >= 0.2) {
        return (12 * beta) / Math.pow(R, 2);
      } else {
        return 300 * beta;
      }
    }
    return (
      (120 * beta * J_n((μ[i] * 0.2) / R, 1)) /
      (R * Math.pow(J_n(μ[i], 0), 2) * μ[i])
    );
  };

  const U = (r: number, t: number) => {
    let result = 0;
    for (let i = 0; i <= n; i++) {
      const lambda = λ(i);
      result +=
        ((B(i) * (Math.pow(Math.E, (lambda * t) / c) - 1)) / lambda) *
        J_n((μ[i] * r) / R, 0);
    }
    return result;
  };

  const factorial = (x: number) => {
    let result = 1;
    if (x === 0) {
      return 1;
    }
    if (x < 0) {
      console.log("Беда факториал");
      return undefined;
    }
    for (let i = 2; i <= x; i++) {
      result *= i;
    }
    return result;
  };

  // Алгоритм
  const rAxis = createRAxis(I);
  const solutionGraph: any = [...rAxis].map((r) => ({
    r,
  }));

  for (const solutionGraphPoint of solutionGraph) {
    const r = solutionGraphPoint.r;
    const t = h_t(K) * k;
    solutionGraphPoint[GPAPH_LABEL] = U(r, t);
  }

  return solutionGraph;
};
