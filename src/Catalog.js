import React, {Component} from 'react';
import ProductCard from './ProductCard';

class Catalog extends Component {
  render() {
    const {productList: list, addToCart} = this.props;

    return (
        <ul>
          {list.map(
             (product) =>  <ProductCard key={product.id} addToCart={this.props.addToCart} product={product} />
             )}
        </ul>
    )
  }
}

export default Catalog;


