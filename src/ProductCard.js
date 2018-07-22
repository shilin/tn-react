import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';

class ProductCard extends Component {
  render() {
    const  product = this.props.product;

    return (
    <div>
      <Image
        src = {product.imageUrl}
        width = "256px"
        height = "256px"
        alt = "clothes"
      />
      <TextBox >
        {product.title}
      </TextBox>
    </div>
    )
  }
}

export default ProductCard;
