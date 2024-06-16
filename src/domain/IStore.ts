export default interface IStoreWithFetch {
  loading: boolean;
  error: string | null;
  clean(): void;
  fetch(): Promise<any>;
}
