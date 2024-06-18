import styled from "styled-components/native";

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
