import React from "react";
import * as S from "./styles";
import IProduct from "@domain/IProduct";
import ButtonCart from "@components/ButtonCart";

interface IProductCard extends IProduct {
  onAdd: () => void;
  onRemove: () => void;
}

const ProductCard: React.FC<IProductCard> = ({
  image,
  title,
  price,
  onAdd,
  onRemove,
}) => {
  return (
    <S.ProductCard>
      <S.ProductImage source={{ uri: image }} />
      <S.ProductName>{title}</S.ProductName>
      <S.ProductPrice>R$ {price}</S.ProductPrice>
      <ButtonCart onAdd={onAdd} onRemove={onRemove} />
    </S.ProductCard>
  );
};

export default ProductCard;
