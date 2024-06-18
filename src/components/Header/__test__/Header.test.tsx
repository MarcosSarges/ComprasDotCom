import React from "react";
import render, { fireEvent } from "@tests";
import Header from "../Header";
import { act, renderHook } from "@testing-library/react-hooks";
import useCart from "@store/useCart";

const mockNavigate = jest.fn();
const mockGoBack = jest.fn();

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: () => ({
    navigate: mockNavigate,
    goBack: mockGoBack,
  }),
}));

describe("Unit::Header", () => {
  it("renders the title correctly", () => {
    const { getByText } = render(<Header title="Test Title" showTitle />);
    const titleElement = getByText("Test Title");
    expect(titleElement).toBeTruthy();
  });

  it("renders the back button when showBack prop is true", () => {
    const { getByTestId } = render(<Header title="Test Title" showBack />);
    const backButton = getByTestId("back-button");
    expect(backButton).toBeTruthy();
  });
  it("calls the onBackPress function when back button is pressed", () => {
    const { getByTestId } = render(<Header title="Test Title" showBack />);
    const backButton = getByTestId("back-button");
    fireEvent.press(backButton);
    expect(mockGoBack).toHaveBeenCalledTimes(1);
  });

  it("renders the cart button when showCart prop is true", () => {
    const { getByTestId } = render(<Header title="Test Title" showCart />);
    const cartButton = getByTestId("cart-button");
    expect(cartButton).toBeTruthy();
  });
  it("calls the navigate function when cart button is pressed", () => {
    const { getByTestId } = render(<Header title="Test Title" showCart />);
    const cartButton = getByTestId("cart-button");
    fireEvent.press(cartButton);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });

  it("renders the cart badge when quantity is greater than 0", () => {
    const { getByTestId } = render(<Header title="Test Title" showCart />);
    const { result } = renderHook(() => useCart());
    act(() => {
      result.current.add({
        id: 1,
        title: "Test",
        price: 10,
        quantity: 1,
        category: "",
        description: "",
        image: "",
      });
    });
    const badge = getByTestId("cart-badge");
    expect(badge).toBeTruthy();
    act(() => result.current.clean());
  });
  it("should no render the cart badge when quantity is 0", () => {
    const { queryByTestId } = render(<Header title="Test Title" showCart />);
    const badge = queryByTestId("cart-badge");
    expect(badge).toBeFalsy();
  });
});
