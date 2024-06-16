import React from "react";
import * as S from "./styles";
import IProduct from "@domain/IProduct";

const ProductCard: React.FC<IProduct> = ({ image, title, price }) => {
  return (
    <S.ProductCard>
      <S.ProductImage source={{ uri: image }} />
      <S.ProductName>{title}</S.ProductName>
      <S.ProductPrice>R$ {price}</S.ProductPrice>
    </S.ProductCard>
  );
};

export default ProductCard;
