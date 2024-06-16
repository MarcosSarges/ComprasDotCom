import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  title: string;
  showBack?: boolean;
  showTitle?: boolean;
  showSearch?: boolean;
  showCart?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBack = false,
  showCart = false,
  showSearch = false,
  showTitle = false,
}) => {
  const { navigate, goBack } = useNavigation();
  return (
    <S.Container>
      {showBack && (
        <S.BackContainer onPress={() => goBack()}>
          <Icon name="arrow-back" size={30} color={"white"} />
        </S.BackContainer>
      )}
      {showTitle && <S.Title>{title}</S.Title>}
      {showSearch && <S.Title></S.Title>}
      {showCart && (
        <S.CartContainer
          onPress={() => {
            navigate("Cart");
          }}
        >
          <Icon name="cart" size={30} color={"white"} />
        </S.CartContainer>
      )}
    </S.Container>
  );
};

export default Header;
