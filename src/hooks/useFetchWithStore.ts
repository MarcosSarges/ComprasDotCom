import IStoreWithFetch from "@domain/IStore";
import { useEffect } from "react";
import { StoreApi, UseBoundStore } from "zustand";

function useFetchWithStore<T>(
  store: UseBoundStore<
    StoreApi<T extends IStoreWithFetch ? IStoreWithFetch : IStoreWithFetch>
  >
) {
  const { fetch, ...infos } = store();

  useEffect(() => {
    fetch();
  }, []);

  return { ...infos } as T & IStoreWithFetch;
}

export default useFetchWithStore;
