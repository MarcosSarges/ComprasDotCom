import ICart, { IItemCart } from "@domain/ICart";
import IStoreWithFetch from "@domain/IStore";
import { produce } from "immer";
import { create } from "zustand";

interface CartStore extends ICart, IStoreWithFetch {
  add(item: IItemCart): void;
  remove(item: IItemCart): void;
}

export const INITIAL_STATE = {
  items: [],
  quantity: 0,
  totalPrice: 0,
  loading: false,
  error: null,
};

const useCart = create<CartStore>((set) => ({
  ...INITIAL_STATE,
  fetch: async () => {
    throw new Error("Method not implemented.");
  },
  add: (item: IItemCart) =>
    set(
      produce((state: CartStore) => {
        state.items.push(item);
        state.quantity += item.quantity;
        state.totalPrice += item.quantity * item.price;
      })
    ),
  remove: (item: IItemCart) =>
    set(
      produce((state: CartStore) => {
        const index = state.items.findIndex((i) => i.id === item.id);
        if (index !== -1) {
          state.quantity -= state.items[index].quantity;
          state.totalPrice -=
            state.items[index].quantity * state.items[index].price;
          state.items.splice(index, 1);
        }
      })
    ),
  clean: () => set(INITIAL_STATE),
}));

export default useCart;
