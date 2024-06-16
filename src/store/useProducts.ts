import IProduct from "@domain/IProduct";
import IStoreWithFetch from "@domain/IStore";
import getProducts from "@services/products/listProducts";
import { create } from "zustand";

export interface IProductsStore extends IStoreWithFetch {
  products: IProduct[];
}
const INITIAL_STATE = {
  products: [],
  loading: false,
  error: null,
};

const useProducts = create<IProductsStore>((set) => ({
  ...INITIAL_STATE,
  page: 0,
  fetch: async () => {
    try {
      set({ loading: true, error: null });
      const result = await getProducts();
      set({ products: result });
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false });
    }
  },
  nextPage: async () => {},
  clean: () => set(INITIAL_STATE),
}));

export default useProducts;
