import React, { Component, Fragment } from 'react';
import Catalog from './Catalog';
import Cart from './Cart';
import CartContext from './CartContext';

class CatalogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: props.productList,
      cartProducts: new Map(),
    };

    this.addToCart = this.addToCart.bind(this);
    this.totalCount = this.totalCount.bind(this);
  }

  addToCart(id, quantity) {
    console.log(id, quantity);
    const newCartProducts = new Map(this.state.cartProducts);
    newCartProducts.set(id, (newCartProducts.get(id) || 0) + +quantity);
    this.setState({ cartProducts: newCartProducts });
  }

  

  totalCount(cartProducts) {
    return ([...cartProducts.values()] || [0]).reduce((pr, cur) => pr + cur, 0);
  }

  render() {
    return (
      <Fragment>
        <CartContext.Provider value={this.state.cartProducts} >
          <Cart totalCount={this.totalCount} />
        </CartContext.Provider >
        <Catalog addToCart={this.addToCart} productList={this.state.productList} />
      </Fragment>
    )
  };
}


export default CatalogPage;
