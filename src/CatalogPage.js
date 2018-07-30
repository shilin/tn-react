import React, { Component, Fragment } from 'react';
import Catalog from './Catalog';
import Cart from './Cart';
import CartContext from './CartContext';

class CatalogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: props.productList,
      cartProductList: [],
    };

    this.addToCart = this.addToCart.bind(this);
  };

  addToCart(product) {
    this.setState({
       cartProductList: this.state.cartProductList.concat(product),
    });
  };

  render() {
    return (
      <Fragment>
        <CartContext.Provider value={this.state.cartProductList} >
          <Cart />
        </CartContext.Provider >
        <Catalog addToCart={this.addToCart} productList={this.state.productList} />
      </Fragment>
    )
  };
}


export default CatalogPage;
