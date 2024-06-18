import pxOnlyNumber from "@helpers/pxOnlyNumber";
import styled from "styled-components/native";

export const Container = styled.View``;

export const ProductCard = styled.TouchableOpacity`
  width: ${({ theme }) =>
    theme.dimensions.width / 2 - pxOnlyNumber(theme.spacings.sm) * 2}px;

  padding: ${({ theme }) => theme.spacings.sm};
  background-color: ${({ theme }) => theme.colors.commons.gray["300"]};
  border-radius: ${({ theme }) => theme.spacings.sm};
  margin: ${({ theme }) => theme.spacings.sm};
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: "cover",
})`
  width: 100%;
  height: 200px;
  align-self: center;
`;
export const ProductName = styled.Text.attrs({
  numberOfLines: 2,
})`
  padding-top: ${({ theme }) => theme.spacings.sm};
  font-size: ${({ theme }) => theme.sizes.lg};
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  padding-top: ${({ theme }) => theme.spacings.sm};
  font-size: ${({ theme }) => theme.sizes.md};
  color: ${({ theme }) => theme.colors.text.default};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const CartButton = styled.TouchableOpacity<{ add?: boolean }>`
  height: 25px;
  width: 25px;
  border-radius: 12.5px;
  background-color: ${({ theme, add }) =>
    theme.colors[add ? "success" : "danger"].main};
  margin-left: ${({ theme }) => theme.spacings.sm};
  align-items: center;
  justify-content: center;
`;
