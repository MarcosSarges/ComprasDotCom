import useCart from "@store/useCart";
import { IItemCart } from "@domain/ICart";
import { act, renderHook } from "@testing-library/react-hooks";

describe("useCart", () => {
  let currentStore: any = null;
  afterEach(() => act(() => currentStore.clean()));

  it("should init cart", () => {
    const { result } = renderHook(() => useCart());
    expect(result.current.items).toHaveLength(0);
    expect(result.current.quantity).toBe(0);
    expect(result.current.totalPrice).toBe(0);
    currentStore = result.current;
  });

  it("should add item in cart", async () => {
    const item: IItemCart = {
      quantity: 2,
      id: 0,
      title: "Camisa",
      price: 10.5,
      category: "Roupas",
      description: "Roupas",
      image: "xpto",
    };

    const { result } = renderHook(() => useCart());
    await act(() => {
      result.current.add(item);
    });

    expect(result.current.items).toHaveLength(1);
    expect(result.current.quantity).toBe(2);
    expect(result.current.totalPrice).toBe(21);
    currentStore = result.current;
  });

  it("should remove item in cart", async () => {
    const item1: IItemCart = {
      quantity: 1,
      id: 0,
      title: "Camisa",
      price: 10.5,
      category: "Roupas",
      description: "Roupas",
      image: "xpto",
    };
    const item2: IItemCart = {
      quantity: 5,
      id: 1,
      title: "Camisa2",
      price: 25.5,
      category: "Roupas",
      description: "Roupas",
      image: "xpto",
    };

    const { result } = renderHook(() => useCart());
    await act(() => {
      result.current.add(item1);
      result.current.add(item2);
    });

    await act(() => {
      result.current.remove(item2);
    });

    expect(result.current.items).toHaveLength(1);
    expect(result.current.quantity).toBe(1);
    expect(result.current.totalPrice).toBe(10.5);

    currentStore = result.current;
  });
});
