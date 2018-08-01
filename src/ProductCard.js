import React, { Component } from 'react';

import Image from './Image';
import TextBox from './TextBox';
import CartUpdater from './CartUpdater';

class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product, addToCart } = this.props;

    return (
      <div>
        <Image
          src={product.imageUrl}
          width="256px"
          height="256px"
          alt="clothes"
        />
        <TextBox >
          {product.title}
        </TextBox>

        <CartUpdater addToCart={addToCart} product={product}>
        </CartUpdater>

      </div>
    )
  }
}

export default ProductCard;
