import React, { Component, Fragment } from 'react';

class CartUpdater extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1
    };
  }

  setField(e, name) {
    this.setState({ [name]: parseInt(e.target.value) || 0 });
  }

  render() {
    return (
      <Fragment>
        <label htmlFor="quantity" >
          <input
            onChange={(e) => this.setField(e, 'quantity')}
            id="quantity"
            name="quantity"
            value={this.state.quantity}
          />
        </label>

        <button onClick={(e) => this.props.addToCart(this.props.product.id, this.state.quantity)}>
          Добавить в корзину
        </button>
      </Fragment>
    )
  }
}

export default CartUpdater;
