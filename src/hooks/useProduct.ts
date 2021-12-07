import { useEffect, useRef, useState } from 'react';
import {
  InitialValues,
  OnChangeArgs,
  Product,
} from '../interfaces/Product.interface';

interface Props {
  product: Product;
  initialValues?: InitialValues;
  value?: number;
  onChange?: (args: OnChangeArgs) => void;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: Props) => {
  // const [counter, setCounter] = useState(value);
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);
  const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {
    if (isControlled.current) {
      return onChange!({ count: value, product });
    }

    let newValue = Math.max(counter + value, 0);

    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) {
      return;
    }

    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    reset,
    counter,
    increaseBy,
    maxCount: initialValues?.maxCount,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
  };
};
