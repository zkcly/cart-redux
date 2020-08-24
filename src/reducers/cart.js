const initialState={
    items:[],
    checkoutStatus:null
}
const items=(state,action)=>{
  switch (action.type){
    case 'ADD_TO_CART':
        const productId=action.product.id
        const product=state.find(item=>item.id===productId)
        if(product){
            product.quantity++
            return [...state]
        }else{
            return[...state,{
                id:productId,
                quantity:1
            }]
        }
    default:
        return state
  }
}
export default (state=initialState,action)=>{
   return {
       items:items(state.items,action)
   }
}