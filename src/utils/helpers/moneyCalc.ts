const add = (a: number, b: number) => parseFloat((a + b).toFixed(2));
const multiply = (a: number, b: number) => parseFloat((a * b).toFixed(2));
const subtract = (a: number, b: number) => parseFloat((a - b).toFixed(2));
const divide = (a: number, b: number) => parseFloat((a / b).toFixed(2));

const formatMoney = (value: number) => {
  return value
    .toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
    .replace(/\s/g, "");
};

export { add, multiply, subtract, divide, formatMoney };
