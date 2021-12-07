# AG-MW-Product-Card

Packquete de pruebas en NPM

### Typescript - React

## Ejemplo

```
import {
  ProductCard,
  ProductTitle,
  ProductButtons,
  ProductImage
} from 'ag-mw-product-card'
```

```
<ProductCard
  product={product}
  initialValues={{
    count: 5,
    maxCount: 10,
  }}
>
  {({ reset, increaseBy, count, isMaxCountReached, maxCount }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
