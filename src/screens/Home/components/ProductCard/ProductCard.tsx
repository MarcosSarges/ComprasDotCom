import React from "react";
import * as S from "./styles";
import IProduct from "@domain/IProduct";
import Icon from "react-native-vector-icons/FontAwesome";

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
      <S.Row>
        <S.CartButton onPress={onRemove}>
          <Icon name="minus" size={15} color={"white"} />
        </S.CartButton>
        <S.CartButton add onPress={onAdd}>
          <Icon name="plus" size={15} color={"white"} />
        </S.CartButton>
      </S.Row>
    </S.ProductCard>
  );
};

export default ProductCard;
