import React, { createContext, CSSProperties } from 'react';
import { useProduct } from '../hooks/useProduct';
import {
  ProductContextProps,
  Product,
  OnChangeArgs,
  InitialValues,
  ProductCardHandlers,
} from '../interfaces/Product.interface';

import styles from '../styles/styles.module.css';

interface Props {
  product: Product;
  className?: string;
  initialValues?: InitialValues;
  value?: number;
  onChange?: (args: OnChangeArgs) => void;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  style?: CSSProperties;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  product,
  className,
  initialValues,
  value,
  onChange,
  style,
  children,
}: Props) => {
  const {
    counter,
    increaseBy,
    maxCount,
    isMaxCountReached,
    reset,
  } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });

  return (
    <Provider value={{ counter, product, increaseBy, maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          reset,
          product,
          increaseBy,
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
        } as ProductCardHandlers)}
      </div>
    </Provider>
  );
};
