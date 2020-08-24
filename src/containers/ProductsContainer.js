import {connect} from 'react-redux'
import Products from '../components/Products'
import {getAllProducts,addToCart} from '../actions/'

function mapStateToProps(state){
    return{
        zkc:state.products.pyl,
        products:state.products.all
    }
}

function mapDispatchToProps(dispatch){
    return{
        getAllProducts(){
            dispatch(getAllProducts())
        },
        addToCart(item){
            dispatch(addToCart(item))
        }
    }
}

const ProductsContainer=connect(mapStateToProps,mapDispatchToProps)(Products)

export default ProductsContainer