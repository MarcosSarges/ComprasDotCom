import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-bottom: ${({ theme }) => theme.spacings.lg};
`;
export const ContainerLoading = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  margin-top: ${({ theme }) => theme.spacings.sm};
  font-size: ${({ theme }) => theme.sizes.xxl};
  font-weight: bold;
  text-align: center;
`;

export const Divider = styled.View`
  height: ${({ theme }) => theme.spacings.md};
`;
