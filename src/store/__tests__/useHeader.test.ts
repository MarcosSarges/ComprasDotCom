import { renderHook, act } from "@testing-library/react-hooks";
import useHeader from "../useHeader";

describe("useHeader", () => {
  let currentStore: any = null;
  afterEach(() => act(() => currentStore.clean()));

  it("should initialize with default values", () => {
    const { result } = renderHook(() => useHeader());
    expect(result.current.showTitle).toBe(true);
    expect(result.current.showSearch).toBe(false);
    expect(result.current.showCart).toBe(true);
    expect(result.current.showUser).toBe(false);
    expect(result.current.showMenu).toBe(false);
    expect(result.current.showBack).toBe(false);
    currentStore = result.current;
  });

  it("should clean the header state", () => {
    const { result } = renderHook(() => useHeader());
    act(() => {
      result.current.setConfig({
        showTitle: false,
        showSearch: true,
        showCart: false,
        showUser: true,
        showMenu: true,
        showBack: true,
      });
    });
    act(() => {
      result.current.clean();
    });
    expect(result.current.showTitle).toBe(true);
    expect(result.current.showSearch).toBe(false);
    expect(result.current.showCart).toBe(true);
    expect(result.current.showUser).toBe(false);
    expect(result.current.showMenu).toBe(false);
    expect(result.current.showBack).toBe(false);
    expect(result.current.oldConfig).toBe(null);
    currentStore = result.current;
  });

  it("should set the old config", () => {
    const { result } = renderHook(() => useHeader());
    act(() => {
      result.current.setConfig({
        showTitle: false,
        showSearch: true,
        showCart: false,
        showUser: true,
        showMenu: true,
        showBack: true,
      });
    });
    act(() => {
      result.current.setOldConfig();
    });
    expect(result.current).toMatchObject({
      showTitle: false,
      showSearch: true,
      showCart: false,
      showUser: true,
      showMenu: true,
      showBack: true,
      oldConfig: null,
    });
    currentStore = result.current;
  });
});
