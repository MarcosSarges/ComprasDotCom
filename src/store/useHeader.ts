import { create } from "zustand";

const INITIAL_STATE = {
  showTitle: true,
  showCart: true,
  showSearch: false,
  showUser: false,
  showMenu: false,
  showBack: false,
  oldConfig: null,
};
type TInitialState = Omit<typeof INITIAL_STATE, "oldConfig">;

export interface IHeaderStore {
  showTitle: boolean;
  showSearch: boolean;
  showCart: boolean;
  showUser: boolean;
  showMenu: boolean;
  showBack: boolean;
  oldConfig: TInitialState | null;
  clean: () => void;
  setOldConfig: () => void;
  setConfig: (config: Partial<TInitialState>) => void;
}

const useHeader = create<IHeaderStore>((set, get) => ({
  ...INITIAL_STATE,
  setOldConfig: () => {
    const old = { ...get().oldConfig };
    set({ ...old, oldConfig: null });
  },
  setConfig: (config: Partial<TInitialState>) =>
    set({ ...config, oldConfig: get() }),
  clean: () => set(INITIAL_STATE),
}));

export default useHeader;
