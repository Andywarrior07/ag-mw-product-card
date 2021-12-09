import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
  test('should render component correctly', () => {
    const title = 'Test title';

    const wrapper = renderer.create(<ProductTitle title={title} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should show name of the product', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
