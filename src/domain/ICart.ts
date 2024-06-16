import IProduct from "./IProduct";

export interface IItemCart extends IProduct {
  quantity: number;
}

export default interface ICart {
  items: IItemCart[];
  quantity: number;
  totalPrice: number;
}
