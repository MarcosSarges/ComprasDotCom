import pxOnlyNumber from "@helpers/pxOnlyNumber";
import styled from "styled-components/native";

export const Container = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.commons.gray[300]};
  padding-vertical: ${({ theme }) => theme.spacings.md};
`;

export const Row = styled.View`
  flex-direction: row;
`;
export const Image = styled.Image.attrs({
  resizeMode: "cover",
})`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: ${({ theme }) => theme.spacings.sm};
`;
export const Title = styled.Text`
  font-size: ${({ theme }) => theme.sizes.md};
  font-weight: ${({ theme }) => theme.fonts.fontWeight[600]};
  color: ${({ theme }) => theme.colors.commons.black};
  flex: 1;
`;
export const Quantity = styled.Text`
  font-size: ${({ theme }) => theme.sizes.sm};
  color: ${({ theme }) => theme.colors.commons.black};
  margin-left: ${({ theme }) => `${pxOnlyNumber(theme.spacings.sm) + 50}px`};
  flex: 1;
`;
export const Buttons = styled.View`
  position: absolute;
`;
