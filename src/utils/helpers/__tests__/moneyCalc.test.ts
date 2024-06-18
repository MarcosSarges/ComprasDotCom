import { add, multiply, subtract, divide, formatMoney } from "../moneyCalc";

describe("moneyCalc", () => {
  describe("add", () => {
    it("should add two numbers correctly", () => {
      expect(add(2, 3)).toBe(5);
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
      expect(add(-5, 10)).toBe(5);
    });
  });

  describe("multiply", () => {
    it("should multiply two numbers correctly", () => {
      expect(multiply(2, 3)).toBe(6);
      expect(multiply(0.1, 0.2)).toBeCloseTo(0.02);
      expect(multiply(-5, 10)).toBe(-50);
    });
  });

  describe("subtract", () => {
    it("should subtract two numbers correctly", () => {
      expect(subtract(5, 3)).toBe(2);
      expect(subtract(0.3, 0.1)).toBeCloseTo(0.2);
      expect(subtract(-5, 10)).toBe(-15);
    });
  });

  describe("divide", () => {
    it("should divide two numbers correctly", () => {
      expect(divide(6, 3)).toBe(2);
      expect(divide(0.2, 0.1)).toBeCloseTo(2);
      expect(divide(-10, 5)).toBe(-2);
    });

    it("should handle division by zero", () => {
      expect(divide(10, 0)).toBe(Infinity);
      expect(divide(-5, 0)).toBe(-Infinity);
    });
  });

  describe("formatMoney", () => {
    it("should format money correctly", () => {
      expect(formatMoney(10)).toMatch("R$10,00");
      expect(formatMoney(0.1)).toMatch("R$0,10");
      expect(formatMoney(1234.5678)).toMatch("R$1.234,57");
    });
  });
});
