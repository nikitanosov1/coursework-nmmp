export class SchemeUtil {
  static readonly R = 2;
  static readonly T = 300;
  static readonly kT = 0.065;
  static readonly c = 1.84;
  static readonly alpha = 0.002;
  static readonly beta = 0.004;
  static readonly l = 0.8;
  static readonly u0 = 0;

  /**
   * @param r Текущая координата по оси r
   * @returns Значение функции I(r), то есть интенсивности излучения
   */
  static valI = (r: number) => {
    if (0 <= r && r <= 0.2) {
      return 300;
    } else {
      return 0;
    }
  };

  /**
   * @param K Кол-во дроблений по координате t
   * @returns Шаг h_t
   */
  static h_t = (K: number) => {
    return this.T / K;
  };

  /**
   * @param I Кол-во дроблений по координате r
   * @returns Шаг h_r
   */
  static h_r = (I: number) => {
    return this.R / I;
  };
}
