import React from 'react';
import ReactDOM from 'react-dom';

import PRODUCTS from './src/constants/Products';
import ProductCard from './src/ProductCard';
import Catalog from './src/Catalog';

ReactDOM.render(
  <Catalog productList={PRODUCTS} />,
  document.getElementById('root')
);
