import React from "react";
import * as S from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

interface IButtonCart {
  onRemove: () => void;
  onAdd: () => void;
}

const ButtonCart: React.FC<IButtonCart> = ({ onRemove, onAdd }) => {
  return (
    <S.Row>
      <S.CartButton onPress={onRemove}>
        <Icon name="minus" size={15} color={"white"} />
      </S.CartButton>
      <S.CartButton add onPress={onAdd}>
        <Icon name="plus" size={15} color={"white"} />
      </S.CartButton>
    </S.Row>
  );
};

export default ButtonCart;
