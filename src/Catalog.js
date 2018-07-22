import React, { Component } from 'react';
import ProductCard from './ProductCard';

class Catalog extends Component {
  render() {
    const list = this.props.productList;

    return (
        <ul>
          { list.map( (product, index) =>  <ProductCard key={index} product={product} />) }
        </ul>
    )
  }
}

export default Catalog;


