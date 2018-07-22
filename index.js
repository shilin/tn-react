import * as MathModule from './src/mathModule';
console.log( MathModule.add(9, 3) );
console.log( MathModule.subtract(9, 3) );
console.log( MathModule.divide(9, 3) );
console.log( MathModule.multiply(9, 3) );

import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './src/Hello';

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);
