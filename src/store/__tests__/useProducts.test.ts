import http from "@config/http";
import useProducts from "@store/useProducts";
import { act, renderHook } from "@testing-library/react-hooks";

describe("useProducts", () => {
  let currentStore: any = null;
  afterEach(() => act(() => currentStore.clean()));

  it("should init products", () => {
    const { result } = renderHook(() => useProducts());
    expect(result.current.products).toHaveLength(0);
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeNull();
    currentStore = result.current;
  });

  it("should fetch products", async () => {
    const { result } = renderHook(() => useProducts());
    await act(async () => {
      await result.current.fetch();
    });
    expect(result.current.products).toHaveLength(20);
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeNull();
    currentStore = result.current;
  });

  it("should fetch products and catch error", async () => {
    jest.spyOn(http, "get").mockRejectedValueOnce(new Error("Error message"));

    const { result } = renderHook(() => useProducts());
    await act(async () => {
      await result.current.fetch();
    });
    expect(result.current.products).toHaveLength(0);
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBe("Error message");
    currentStore = result.current;
  });
});
