import ICart, { IItemCart } from "@domain/ICart";
import IStoreWithFetch from "@domain/IStore";
import { add, multiply, subtract } from "@helpers/moneyCalc";
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

const removeProductInCart = (state: CartStore, index: number) => {
  state.items = [...state.items.filter((_, i) => i !== index)];
};

const minusItemInCart = (state: CartStore, item: IItemCart) => {
  const nextQuantity = state.quantity - item.quantity;
  state.quantity = nextQuantity < 0 ? 0 : nextQuantity;

  const nextValue = subtract(
    state.totalPrice,
    multiply(item.price, item.quantity)
  );
  state.totalPrice = nextQuantity < 0 ? 0 : nextValue;
};
const minusQuantityInItem = (
  state: CartStore,
  index: number,
  item: IItemCart
) => {
  state.items[index].quantity -= item.quantity;
};

const useCart = create<CartStore>((set) => ({
  ...INITIAL_STATE,
  fetch: async () => {
    throw new Error("Method not implemented.");
  },
  add: (item: IItemCart) =>
    set((state: CartStore) => {
      const index = state.items.findIndex((i) => i.id === item.id);
      if (index === -1) {
        state.items = [...state.items, { ...item }];
      } else {
        state.items[index].quantity += item.quantity;
      }
      state.quantity += item.quantity;
      state.totalPrice = add(
        state.totalPrice,
        multiply(item.price, item.quantity)
      );
      return { ...state };
    }),
  remove: (item: IItemCart) =>
    set((state: CartStore) => {
      const index = state.items.findIndex((i) => i.id === item.id);
      if (index === -1) return state;

      minusItemInCart(state, item);
      minusQuantityInItem(state, index, item);
      if (state.items[index].quantity <= 0) removeProductInCart(state, index);
      return { ...state };
    }),
  clean: () => set(INITIAL_STATE),
}));

export default useCart;
