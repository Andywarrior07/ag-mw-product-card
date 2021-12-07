import React, { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';

import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

interface Props {
  img?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ img, className, style }: Props) => {
  const { product } = useContext(ProductContext);
  const imgToShow = img ? img : product.img ? product.img : noImage;

  return (
    <img
      src={imgToShow}
      alt="Product pic"
      style={style}
      className={`${styles.productImg} ${className}`}
    />
  );
};
