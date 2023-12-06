import { describe, test } from "@jest/globals";
import { sumNumbers } from "../app";

describe("sumNumbers", () => {
  describe("receber dois numeros", () => {
    const a = 1;
    const b = 2;

    test("somar 1 com 2 dá 3", () => {
      const result = sumNumbers(a, b);
      expect(result).toBe(3);
    });
  });

  describe("recebo duas strings", () => {
    const a = "ah";
    const b = "bê";

    test("dá erro", () => {
      expect(() => sumNumbers(a, b)).toThrow();
    });
  });
});
