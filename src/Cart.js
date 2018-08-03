import React, {Fragment, Component} from 'react';
import CartContext from './CartContext';

class Cart extends Component {
  render() {

    return (
      <Fragment>
      <CartContext.Consumer>
        {value => value.totalCount(value.entries)}
      </CartContext.Consumer>
      <button>Корзина</button>
      </Fragment>
    )
  }
}

export default Cart;


