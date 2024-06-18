import useCart from "@store/useCart";
import { IItemCart } from "@domain/ICart";
import { act, renderHook } from "@testing-library/react-hooks";

describe("useCart", () => {
  let currentStore: any = null;
  afterEach(() => act(() => currentStore.clean()));

  it("should decrease quantity when removing an item from cart", () => {
    const item: IItemCart = {
      quantity: 3,
      id: 2,
      title: "Shoes",
      price: 50,
      category: "Footwear",
      description: "Comfortable shoes",
      image: "xyz",
    };
    const { result } = renderHook(() => useCart());
    act(() => {
      result.current.add(item);
    });
    act(() => {
      result.current.remove(item);
    });
    expect(result.current.items).toHaveLength(0);
    expect(result.current.quantity).toBe(0);
    expect(result.current.totalPrice).toBe(0);
    currentStore = result.current;
  });

  it("should update quantity and total price when adding an item to cart", () => {
    const item: IItemCart = {
      quantity: 1,
      id: 1,
      title: "Shirt",
      price: 25,
      category: "Clothing",
      description: "Comfortable shirt",
      image: "abc",
    };
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.add(item);
    });
    act(() => {
      result.current.add(item);
    });
    expect(result.current.items).toHaveLength(1);
    expect(result.current.quantity).toBe(2);
    expect(result.current.totalPrice).toBe(50);
    currentStore = result.current;
  });
  it("should update quantity and total price when adding multiple items to cart", () => {
    const item1: IItemCart = {
      quantity: 2,
      id: 3,
      title: "Hat",
      price: 15,
      category: "Accessories",
      description: "Stylish hat",
      image: "abc",
    };
    const item2: IItemCart = {
      quantity: 1,
      id: 4,
      title: "Sunglasses",
      price: 20,
      category: "Accessories",
      description: "UV protection sunglasses",
      image: "def",
    };
    const { result } = renderHook(() => useCart());
    act(() => {
      result.current.add(item1);
      result.current.add(item2);
    });
    expect(result.current.items).toHaveLength(2);
    expect(result.current.quantity).toBe(3);
    expect(result.current.totalPrice).toBe(50);
    currentStore = result.current;
  });

  it("should not update cart when removing an item that is not in the cart", () => {
    const item: IItemCart = {
      quantity: 1,
      id: 5,
      title: "T-shirt",
      price: 12.5,
      category: "Clothing",
      description: "Comfortable t-shirt",
      image: "ghi",
    };
    const { result } = renderHook(() => useCart());
    act(() => {
      result.current.add(item);
    });

    expect(result.current.items).toHaveLength(1);

    act(() => {
      result.current.remove(item);
    });
    expect(result.current.items).toHaveLength(0);
    expect(result.current.quantity).toBe(0);
    expect(result.current.totalPrice).toBe(0);
    currentStore = result.current;
  });
  it("should not update cart when removing an item that is not in the cart", () => {
    const item: IItemCart = {
      quantity: 1,
      id: 5,
      title: "T-shirt",
      price: 12.5,
      category: "Clothing",
      description: "Comfortable t-shirt",
      image: "ghi",
    };
    const { result } = renderHook(() => useCart());
    act(() => {
      result.current.add(item);
    });

    expect(result.current.items).toHaveLength(1);

    act(() => {
      result.current.remove({ ...item, id: 6 });
    });
    expect(result.current.items).toHaveLength(1);
    expect(result.current.quantity).toBe(1);
    expect(result.current.totalPrice).toBe(12.5);
    currentStore = result.current;
  });

  it("should reset the quantity and total price when removing more items than are in the cart", () => {
    const item: IItemCart = {
      quantity: 1,
      id: 7,
      title: "Shorts",
      price: 30,
      category: "Clothing",
      description: "Comfortable shorts",
      image: "jkl",
    };
    const { result } = renderHook(() => useCart());
    act(() => {
      result.current.add(item);
    });
    act(() => {
      result.current.remove({ ...item, quantity: 2 });
    });
    expect(result.current.items).toHaveLength(0);
    expect(result.current.quantity).toBe(0);
    expect(result.current.totalPrice).toBe(0);
    currentStore = result.current;
  });
});
