const add = (a: number, b: number) => parseFloat((a + b).toFixed(2));
const multiply = (a: number, b: number) => parseFloat((a * b).toFixed(2));
const subtract = (a: number, b: number) => parseFloat((a - b).toFixed(2));
const divide = (a: number, b: number) => parseFloat((a / b).toFixed(2));

export { add, multiply, subtract, divide };
