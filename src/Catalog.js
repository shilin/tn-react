import React, {Component} from 'react';
import ProductCard from './ProductCard';

class Catalog extends Component {
  render() {
    const list = this.props.productList;
    const addToCart = this.props.addToCart;

    return (
        <ul>
          {list.map(
             (product, index) =>  <ProductCard key={index} addToCart={this.props.addToCart} product={product} />
             )}
        </ul>
    )
  }
}

export default Catalog;


