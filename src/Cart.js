import React, {Fragment, Component} from 'react';
import CartContext from './CartContext';

class Cart extends Component {
  render() {
    const count = this.props.cartCount;

    return (
      <Fragment>
      {count}
      <CartContext.Consumer>
        {context => context.length}
      </CartContext.Consumer>
      <button>Корзина</button>
      </Fragment>
    )
  }
}

export default Cart;


