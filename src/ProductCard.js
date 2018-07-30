import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';

class ProductCard extends Component {
  render() {
    const  {product, addToCart} = this.props;

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
      <button onClick={(e) => addToCart(product)}>
        Добавить в корзину
      </button>
    </div>
    )
  }
}

export default ProductCard;
