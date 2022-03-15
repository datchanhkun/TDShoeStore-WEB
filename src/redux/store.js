import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productDetailsReducer, productListReducer, productCreateReviewReducer, productListAdminReducer, productDeleteReducer, productCreateReducer, productEditReducer, productUpdateReducer } from './Reducers/productReducers'
import { cartReducer } from './Reducers/cartReducers'
import { userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer, userListReducer } from './Reducers/userReducers';
import { orderCreateReducer, orderDeliveredReducer, orderDetailsReducer, orderListAdminReducer, orderListReducer, orderPayReducer } from './Reducers/orderReducer';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productReviewCreate: productCreateReviewReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderListMy: orderListReducer,
  //Role ADMIN
  userList: userListReducer,
  productListAdmin: productListAdminReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productEdit: productEditReducer,
  productUpdate: productUpdateReducer,
  orderListAdmin: orderListAdminReducer,
  orderDelivered: orderDeliveredReducer
})
//Cart item storage
const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
? JSON.parse(localStorage.getItem("cartItems"))
: []

//User Info storage
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo"))
: null

//Shipping Address storage
const shippingAddressFromLocalStorage = localStorage.getItem("shippingAddress")
? JSON.parse(localStorage.getItem("shippingAddress"))
: {}

const initialState = {
  cart: {
    cartItems: cartItemsFromLocalStorage,
    shippingAddress: shippingAddressFromLocalStorage
  },
  userLogin: {
    userInfo: userInfoFromLocalStorage
  }
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store