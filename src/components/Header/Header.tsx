import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import * as S from "./styles";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@routes/RootRouter";
import useCart from "@store/useCart";

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
  const { navigate, goBack } =
    useNavigation<NavigationProp<RootStackParamList>>();
  const { quantity } = useCart();

  return (
    <S.Container>
      {showBack && (
        <S.BackContainer testID="back-button" onPress={() => goBack()}>
          <Icon name="arrow-back" size={30} color={"white"} />
        </S.BackContainer>
      )}
      {showTitle && <S.Title>{title}</S.Title>}
      {showCart && (
        <S.CartContainer testID="cart-button" onPress={() => navigate("Cart")}>
          <Icon name="cart" size={30} color={"white"} />
          {quantity > 0 && (
            <S.CartBadge testID="cart-badge">
              <S.Badge>{quantity}</S.Badge>
            </S.CartBadge>
          )}
        </S.CartContainer>
      )}
    </S.Container>
  );
};

export default Header;
