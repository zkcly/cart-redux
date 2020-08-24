import {createStore,combineReducers,applyMiddleware} from 'redux'
import products from '../reducers/produsts'
import cart from '../reducers/cart'
import thunk from 'redux-thunk'

const rootReducer=combineReducers({
    products,
    cart
})

const store=createStore(rootReducer,applyMiddleware(thunk))

export default store