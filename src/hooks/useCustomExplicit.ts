import { SchemeUtil } from "@/util/scheme";

interface IProps {
  label: string;
  I: number;
  K: number;
  k: number; // Номер временного слоя
}

export const useCustomExplicit = ({ label, I, K, k: k_layer }: IProps) => {
  const SCHEMA_LABEL = label;

  const { R, kT, c, alpha, beta, l, u0, h_t, h_r, valI, createRAxis } =
    SchemeUtil;

    const mu = (r: number) => {
      return (kT * h_t(K)) / ( c * r * h_r(I));
    };
  
    const gamma = () => {
      return (kT * h_t(K)) / (c * Math.pow(h_r(I), 2));
    };
  
    const eps = () => {
      return (2 * alpha * h_t(K)) / (c * l);
    };
  
    const mu_2 = (r: number) => {
      return (kT * h_t(K*2)) / ( c * r * h_r(I));
    };
  
    const gamma_2 = () => {
      return (kT * h_t(K*2)) / (c * Math.pow(h_r(I), 2));
    };
  
    const eps_2 = () => {
      return (2 * alpha * h_t(K*2)) / (c * l);
    };

  // Алгоритм
  const startTime = performance.now();
  const rAxisArray = createRAxis(I);
  const schemaSolutionGraph: any = [...rAxisArray].map((r) => ({
    r,
  }));

  const u: number[][] = new Array(K + 1)
    .fill(0)
    .map(() => new Array(I + 1).fill(0));
  u[0] = new Array(I + 1).fill(0);
  for (let k = 0; k < K; k++) {
    u[k + 1] = new Array(I + 1).fill(0);
    u[k + 1][0] += u[k][0] * (1 - 4 * gamma() - eps());
    u[k + 1][0] += u[k][1] * 4 * gamma();
    u[k + 1][0] += (beta * valI(0) * h_t(K)) / c;
    for (let i = 1; i < I; i++) {
      const r = h_r(I) * i;
      u[k + 1][i] += u[k][i + 1] * (gamma() + mu(r));
      u[k + 1][i] += u[k][i] * (1 - 2 * gamma() - mu(r) - eps());
      u[k + 1][i] += u[k][i - 1] * (gamma());
      u[k + 1][i] += (beta * valI(r) * h_t(K)) / c;
    }
    u[k + 1][I] = u[k + 1][I - 1];
    // u[k + 1][I] += u[k][I] * (1 - 2 * gamma() - eps());
    // u[k + 1][I] += u[k][I - 1] * 2 * gamma();
    // u[k + 1][I] += (beta * valI(R) * h_t(K)) / c;
  }

  for (let k = 0; k < K + 1; k++) {
    for (let i = 0; i < I + 1; i++) {
      u[k][i] += u0;
    }
  }

  for (let i = 0; i < I + 1; i++) {
    schemaSolutionGraph[i][`${SCHEMA_LABEL}`] = u[k_layer][i];
  }
  const endTime = performance.now();

  const workTime = endTime - startTime;
  return [schemaSolutionGraph, SCHEMA_LABEL, workTime];
};
