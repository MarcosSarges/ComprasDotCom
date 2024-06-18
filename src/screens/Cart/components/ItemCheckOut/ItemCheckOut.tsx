import React from "react";
import * as S from "./styles";
import { IItemCart } from "@domain/ICart";
import ButtonCart from "@components/ButtonCart";

interface IItemCheckOut extends IItemCart {
  onRemove: () => void;
  onAdd: () => void;
}

const ItemCheckOut: React.FC<IItemCheckOut> = ({
  image,
  title,
  quantity,
  onAdd,
  onRemove,
}) => {
  return (
    <S.Container>
      <S.Row>
        <S.Image source={{ uri: image }} />
        <S.Title>{title}</S.Title>
      </S.Row>
      <S.Row>
        <S.Quantity>Quantidade: {quantity}</S.Quantity>
        <ButtonCart onAdd={onAdd} onRemove={onRemove} />
      </S.Row>
    </S.Container>
  );
};

export default ItemCheckOut;
