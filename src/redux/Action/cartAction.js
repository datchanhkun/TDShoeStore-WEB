import axios from "axios"
import { API_ROOT } from "../../ultilities/constants"
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS } from "../Constants/cartConstants"

//ADD PRODUCT TO CART
export const addToCartAction = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`${API_ROOT}/api/products/${id}`)

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInstock: data.countInstock,
      qty
    }
  })
  //Luu product in cart vao localstorage
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems)); //get state tu initialstate reducer
}

//REMOVE PRODUCT FROM CART
export const removeFromCartAction = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id
  })

  //Luu product in cart vao localstorage
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems)); //get state tu initialstate reducer
}

//SAVE SHIPPING ADDRESS
export const saveShippingAddressAction = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data
  })

  //Luu product in cart vao localstorage
  localStorage.setItem("shippingAddress", JSON.stringify(data)); //get state tu initialstate reducer
}

//SAVE PAYMENT METHOD
export const savePaymentMethodAction = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data
  })

  //Luu product in cart vao localstorage
  localStorage.setItem("paymentMethod", JSON.stringify(data)); //get state tu initialstate reducer
}

