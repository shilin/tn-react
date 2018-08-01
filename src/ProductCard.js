import React, { Component } from 'react';

import Image from './Image';
import TextBox from './TextBox';
import CartUpdater from './CartUpdater';

class ProductCard extends Component {
  constructor(props) {
    super(props);
    // this.onChangeHandler = this.onChangeHandler.bind(this);
    // this.setField = this.setField.bind(this);

  }

  // onChangeHandler(e, name) {
  //   console.log('changed');
  //   console.log(name);
  //   this.setField(e, name);
  // }

  // setField(e, name) {
  //   this.setState({ [name]: parseInt(e.target.value) || 0 });
  // }

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
