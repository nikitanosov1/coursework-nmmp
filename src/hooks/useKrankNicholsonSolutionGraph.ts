import { SchemeUtil } from "@/util/scheme";

interface IProps {
  I: number;
  K: number;
  k: number; // Номер временного слоя
}

export const useKrankNicholsonSolutionGraph = ({ I, K, k }: IProps) => {
  const SCHEMA_LABEL = "Схема Кранка-Николсона";

  const { R, kT, c, alpha, beta, l, u0, valI, h_t, h_r, createRAxis } =
    SchemeUtil;

  const mu = (r: number) => {
    return (kT * h_t(K)) / (4 * c * r * h_r(I));
  };

  const gamma = () => {
    return (kT * h_t(K)) / (2 * c * h_r(I) * h_r(I));
  };

  const eps = () => {
    return (alpha * h_t(K)) / (c * l);
  };

  const generateA = () => {
    const a: number[] = new Array(I + 1);
    let r;
    for (let i = 1; i < I; i++) {
      r = h_r(I) * i;
      a[i] = -(gamma() - mu(r));
    }
    a[I] = -2 * gamma();
    return a;
  };

  const generateB = () => {
    const b: number[] = new Array(I + 1);
    let r;
    b[0] = -4 * gamma();
    for (let i = 1; i < I; i++) {
      r = h_r(I) * i;
      b[i] = -(gamma() + mu(r));
    }
    return b;
  };

  const generateC = () => {
    const c: number[] = new Array(I + 1);
    c[0] = 1 + 4 * gamma() + eps();
    for (let i = 1; i < I + 1; i++) {
      c[i] = 1 + 2 * gamma() + eps();
    }
    return c;
  };

  const thomasMethod = (a: number[], b: number[], c: number[], f: number[]) => {
    const p = new Array(c.length);
    const q = new Array(c.length);
    const x = new Array(c.length);
    p[0] = b[0] / c[0];
    q[0] = f[0] / c[0];
    // len(f) = I + 1
    for (let i = 1; i < I; i++) {
      p[i] = b[i] / (c[i] - a[i] * p[i - 1]);
      q[i] = (f[i] - a[i] * q[i - 1]) / (c[i] - a[i] * p[i - 1]);
    }
    let i = I;
    q[I] = (f[i] - a[i] * q[i - 1]) / (c[i] - a[i] * p[i - 1]);
    x[i] = q[i];
    while (i > 0) {
      i = i - 1;
      x[i] = q[i] - p[i] * x[i + 1];
    }
    return x;
  };

  const generateF = (uK: number[]) => {
    const GAMMA = gamma();
    const EPS = eps();
    const H_t = h_t(K);
    const H_r = h_r(I);
    const f: number[] = new Array(I + 1);
    let r: number;
    f[0] = (1 - 4 * GAMMA - EPS) * uK[0];
    f[0] += 4 * GAMMA * uK[1];
    f[0] += (beta * valI(0) * H_t) / c;
    for (let i = 1; i < I; i++) {
      r = H_r * i;
      f[i] = (1 - 2 * GAMMA - EPS) * uK[i];
      f[i] += (GAMMA + mu(r)) * uK[i + 1];
      f[i] += (GAMMA - mu(r)) * uK[i - 1];
      f[i] += (beta * valI(r) * H_t) / c;
    }
    f[I] = (1 - 2 * GAMMA - EPS) * uK[I];
    f[I] += 2 * GAMMA * uK[I - 1];
    f[I] += (beta * valI(R) * H_t) / c;
    return f;
  };

  // Алгоритм
  const startTime = performance.now();
  const rAxis = createRAxis(I);
  const schemaSolutionGraph: any = [...rAxis].map((r) => ({
    r,
  }));

  const u: number[][] = new Array(K + 1)
    .fill(0)
    .map(() => new Array(I + 1).fill(0));
  u[0] = new Array(I + 1).fill(0);
  const A: number[] = generateA();
  const B: number[] = generateB();
  const C: number[] = generateC();

  for (let k = 1; k < K + 1; k++) {
    const F: number[] = generateF(u[k - 1]);
    u[k] = thomasMethod(A, B, C, F);
  }

  for (let k = 0; k < K + 1; k++) {
    for (let i = 0; i < I + 1; i++) {
      u[k][i] += u0;
    }
  }

  for (let i = 0; i < I + 1; i++) {
    schemaSolutionGraph[i][`${SCHEMA_LABEL}`] = u[k][i];
  }

  const endTime = performance.now();

  const workTime = endTime - startTime;
  return { schemaSolutionGraph, SCHEMA_LABEL, workTime };
};
