import React, { Component } from 'react';
import Label from './Label'

class Hello extends Component {
  render() {
    return (
      <div>Hello, <Label>world</Label></div>
    )
  }
}

export default Hello;