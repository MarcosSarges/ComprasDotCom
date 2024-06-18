import pxOnlyNumber from "@helpers/pxOnlyNumber";
import styled from "styled-components/native";

const HEADER_HEIGHT = 40;

export const Container = styled.View`
  padding-top: ${({ theme }) => `${theme.insets.top}px`};
  height: ${({ theme }) =>
    `${theme.insets.top + HEADER_HEIGHT + pxOnlyNumber(theme.spacings.sm)}`}px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.sizes.xl};
  color: ${({ theme }) => theme.colors.commons.white};
`;

export const CartContainer = styled.TouchableOpacity`
  position: absolute;
  top: ${({ theme }) => theme.insets.top + pxOnlyNumber(theme.spacings.sm)}px;
  right: ${({ theme }) => theme.spacings.md};
`;
export const BackContainer = styled.TouchableOpacity`
  position: absolute;
  top: ${({ theme }) => theme.insets.top + pxOnlyNumber(theme.spacings.sm)}px;
  left: ${({ theme }) => theme.spacings.md};
`;

export const CartBadge = styled.View`
  position: absolute;
  right: 0px;
  background-color: ${({ theme }) => theme.colors.danger.main};
  height: 15px;
  width: 15px;
  align-items: center;
  justify-content: center;
  border-radius: 7.5px;
`;
export const Badge = styled.Text`
  color: ${({ theme }) => theme.colors.commons.white};
  font-size: ${({ theme }) => theme.sizes.xs};
`;
