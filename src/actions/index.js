import * as shop from '../api/shop'
 
export const reciveProducts=products=>({
    type:'RECIVE_PRODUCTS',
    products
})
export const getAllProducts=()=>dispatch=>{
   shop.getAllProducts(products=>{
       dispatch(reciveProducts(products))
   })
}

export const addToCart =product=>dispatch=>{
    dispatch({
        type:'ADD_TO_CART',
        product
    })
}