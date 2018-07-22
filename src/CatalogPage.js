import React, { Component } from 'react';
import Catalog from './Catalog';

class CatalogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: props.productList,
    };
  }

  render() {
    return (
      <Catalog productList={this.state.productList} />
    )
  }
}


export default CatalogPage;
