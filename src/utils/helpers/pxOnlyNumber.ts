const pxOnlyNumber = (value: string): number =>
  Number(value.replace(/\D/g, ""));

export default pxOnlyNumber;
