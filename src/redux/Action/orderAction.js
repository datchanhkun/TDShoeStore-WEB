
import axios from 'axios';
import { CART_CLEAR_ITEMS } from '../Constants/cartConstants';
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DELIVERED_FAIL,
  ORDER_DELIVERED_REQUEST,
  ORDER_DELIVERED_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_LIST_ADMIN_FAIL,
  ORDER_LIST_ADMIN_REQUEST,
  ORDER_LIST_ADMIN_SUCCESS,
  ORDER_LIST_MY_FAIL,
  ORDER_LIST_MY_REQUEST,
  ORDER_PAY_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS
} from '../Constants/orderConstants';
import { API_ROOT } from './../../ultilities/constants';
import { logoutAction } from './userAction';
import { ORDER_LIST_MY_SUCCESS } from './../Constants/orderConstants';

//CREATE ORDER
export const createOrderAction = (order) => async(dispatch, getState) => {
  try {
    dispatch({ type: ORDER_CREATE_REQUEST })

    const {
      userLogin: { userInfo }
    } = getState()
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.post(`${API_ROOT}/api/orders`, order, config)

    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data})
    dispatch({ type: CART_CLEAR_ITEMS, payload: data})

    //Remove cartItems localStorage
    localStorage.removeItem("cartItems")

  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    //Check token het han thi logout
    if(message === "Not authorized, Token failed") {
      dispatch(logoutAction())
    }
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload: message
    })
  }
}

//ORDER DETAILS
export const orderDetailsAction = (id) => async(dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST })

    const {
      userLogin: { userInfo }
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.get(`${API_ROOT}/api/orders/${id}`, config)

    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data})

  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    //Check token het han thi logout
    if(message === "Not authorized, Token failed") {
      dispatch(logoutAction())
    }
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: message
    })
  }
}

//ORDER PAYMENT
export const orderPayAction = (orderId, paymentResult) => async(dispatch, getState) => {
  try {
    dispatch({ type: ORDER_PAY_REQUEST })

    const {
      userLogin: { userInfo }
    } = getState()
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.put(`${API_ROOT}/api/orders/${orderId}/pay`, paymentResult, config)

    dispatch({ type: ORDER_PAY_SUCCESS, payload: data})

  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    //Check token het han thi logout
    if(message === "Not authorized, Token failed") {
      dispatch(logoutAction())
    }
    dispatch({
      type: ORDER_PAY_FAIL,
      payload: message
    })
  }
}

//USER ORDER MY LIST
export const listMyOrdersAction = () => async(dispatch, getState) => {
  try {
    dispatch({ type: ORDER_LIST_MY_REQUEST })

    const {
      userLogin: { userInfo }
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.get(`${API_ROOT}/api/orders/`, config)

    dispatch({ type: ORDER_LIST_MY_SUCCESS, payload: data})

  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    //Check token het han thi logout
    if(message === "Not authorized, Token failed") {
      dispatch(logoutAction())
    }
    dispatch({
      type: ORDER_LIST_MY_FAIL,
      payload: message
    })
  }
}

//ADMIN GET ALL ORDERS
export const listAdminOrdersAction = () => async(dispatch, getState) => {
  try {
    dispatch({ type: ORDER_LIST_ADMIN_REQUEST })

    const {
      userLogin: { userInfo }
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.get(`${API_ROOT}/api/orders/all`, config)

    dispatch({ type: ORDER_LIST_ADMIN_SUCCESS, payload: data})

  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    //Check token het han thi logout
    if(message === "Not authorized, Token failed") {
      dispatch(logoutAction())
    }
    dispatch({
      type: ORDER_LIST_ADMIN_FAIL,
      payload: message
    })
  }
}

//ADMIN DELIVERED ORDER
export const orderDeliveredAction = (order) => async(dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DELIVERED_REQUEST })

    const {
      userLogin: { userInfo }
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.put(`${API_ROOT}/api/orders/${order._id}/delivered`, {}, config)

    dispatch({ type: ORDER_DELIVERED_SUCCESS, payload: data})

  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    //Check token het han thi logout
    if(message === "Not authorized, Token failed") {
      dispatch(logoutAction())
    }
    dispatch({
      type: ORDER_DELIVERED_FAIL,
      payload: message
    })
  }
}