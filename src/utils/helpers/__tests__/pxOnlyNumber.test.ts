import pxOnlyNumber from "../pxOnlyNumber";

describe("pxOnlyNumber", () => {
  it('should return the number value of a string with "px" unit', () => {
    expect(pxOnlyNumber("10px")).toBe(10);
    expect(pxOnlyNumber("20px")).toBe(20);
    expect(pxOnlyNumber("30px")).toBe(30);
  });

  it("should return 0 if the input string does not contain any number", () => {
    expect(pxOnlyNumber("px")).toBe(0);
    expect(pxOnlyNumber("abc")).toBe(0);
    expect(pxOnlyNumber("")).toBe(0);
  });

  it("should return the number value even if the input string contains non-digit characters", () => {
    expect(pxOnlyNumber("10pxabc")).toBe(10);
    expect(pxOnlyNumber("20px123")).toBe(20123);
    expect(pxOnlyNumber("30pxxyz")).toBe(30);
  });

  it("should return the number value even if the input string contains leading or trailing whitespace", () => {
    expect(pxOnlyNumber("  10px  ")).toBe(10);
    expect(pxOnlyNumber("  20px  ")).toBe(20);
    expect(pxOnlyNumber("  30px  ")).toBe(30);
  });
});
