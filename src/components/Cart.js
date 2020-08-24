import React, { Component } from "react"

class Cart extends Component{
    
   render (){
    const {cartProducts,totalPrice}=this.props
    console.log(cartProducts,totalPrice)
   
       return(
           <div>
               <h2>Cart</h2>
               <ul>
                    {cartProducts.map(item => (
                        <li key={item.id}>
                          <span> {item.title} - {item.price} *{item.quantity}</span>
                        </li>
                    ))}
                </ul>
                    <p>Total:{totalPrice}</p>
                {!cartProducts.length?'Please add som products to cart':''}
           </div>
       )
   }
}

export default Cart