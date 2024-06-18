import pxOnlyNumber from "@helpers/pxOnlyNumber";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;
export const Content = styled.View`
  padding: ${({ theme }) => `${theme.spacings.md}`};
  flex: 1;
`;
export const Title = styled.Text`
  font-size: ${({ theme }) => theme.sizes.md};
  font-weight: ${({ theme }) => theme.fonts.fontWeight[900]};
  color: ${({ theme }) => theme.colors.commons.black};
`;

export const Summary = styled.View`
  padding: ${({ theme }) => `${theme.spacings.md}`};
  background-color: ${({ theme }) => theme.colors.primary.light};
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.primary.main};
  padding-bottom: ${({ theme }) =>
    `${theme.insets.bottom + pxOnlyNumber(theme.spacings.md)}px`};
`;
