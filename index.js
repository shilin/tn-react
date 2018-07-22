import React from 'react';
import ReactDOM from 'react-dom';

import PRODUCTS from './src/constants/Products';
import CatalogPage from './src/CatalogPage';

ReactDOM.render(
  <CatalogPage productList={PRODUCTS} />,
  document.getElementById('root')
);
