import React from 'react';
import Cart from './containers/CartContainer'
import Products from './containers/ProductsContainer'

function App() {
  return (
    <div>
       <h1>Shopping Cart Example</h1>
       <hr/>
       <Products></Products>
       <hr/>
       <Cart></Cart>
    </div>
  );
}

export default App;
