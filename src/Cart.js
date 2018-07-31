import React, {Fragment, Component} from 'react';
import CartContext from './CartContext';

class Cart extends Component {
  render() {
    const totalCount = this.props.totalCount;

    return (
      <Fragment>
      <CartContext.Consumer>
        {cartProducts => totalCount(cartProducts)}
      </CartContext.Consumer>
      <button>Корзина</button>
      </Fragment>
    )
  }
}

export default Cart;


