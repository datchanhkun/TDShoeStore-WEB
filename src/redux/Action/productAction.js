import axios from "axios";
import { API_ROOT } from "../../ultilities/constants";
import {
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_EDIT_FAIL,
  PRODUCT_EDIT_REQUEST,
  PRODUCT_EDIT_SUCCESS,
  PRODUCT_LIST_ADMIN_FAIL,
  PRODUCT_LIST_ADMIN_REQUEST,
  PRODUCT_LIST_ADMIN_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
} from "../Constants/productConstants";
import { logoutAction } from "./userAction";

export const productListAction =
  (keyword = " ", pageNumber = " ") =>
  async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST });

      const { data } = await axios.get(
        `${API_ROOT}/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
      );

      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const productDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`${API_ROOT}/api/products/${id}`);

    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//PRODUCT REVIEW
export const createProductReviewAction =
  (productId, review) => async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_CREATE_REVIEW_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.post(
        `${API_ROOT}/api/products/${productId}/review`,
        review,
        config
      );

      dispatch({ type: PRODUCT_CREATE_REVIEW_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      //Check token het han thi logout
      if (message === "Not authorized, Token failed") {
        dispatch(logoutAction());
      }
      dispatch({
        type: PRODUCT_CREATE_REVIEW_FAIL,
        payload: message,
      });
    }
  };

//ADMIN GET AL PRODUCT
export const productListAdminAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_LIST_ADMIN_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`${API_ROOT}/api/products/all`, config);

    dispatch({ type: PRODUCT_LIST_ADMIN_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    //Check token het han thi logout
    if (message === "Not authorized, Token failed") {
      dispatch(logoutAction());
    }
    dispatch({
      type: PRODUCT_LIST_ADMIN_FAIL,
      payload: message,
    });
  }
};

//ADMIN DELETE PRODUCT
export const productDeleteAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_DELETE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`${API_ROOT}/api/products/${id}`, config);

    dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    //Check token het han thi logout
    if (message === "Not authorized, Token failed") {
      dispatch(logoutAction());
    }
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload: message,
    });
  }
};

//ADMIN CREATE PRODUCT
export const productCreateAction = (name, price, description, image, countInstock) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_CREATE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`${API_ROOT}/api/products`,{ name, price, description, image, countInstock }, config);

    dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    //Check token het han thi logout
    if (message === "Not authorized, Token failed") {
      dispatch(logoutAction());
    }
    dispatch({
      type: PRODUCT_CREATE_FAIL,
      payload: message,
    });
  }
};

//PRODUCT VIEW EDIT
export const productEditAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_EDIT_REQUEST });

    const { data } = await axios.get(`${API_ROOT}/api/products/${id}`);

    dispatch({ type: PRODUCT_EDIT_SUCCESS, payload: data });
  }  catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    //Check token het han thi logout
    if (message === "Not authorized, Token failed") {
      dispatch(logoutAction());
    }
    dispatch({
      type: PRODUCT_EDIT_FAIL,
      payload: message,
    });
  }
};

//ADMIN UPDATE PRODUCT
export const productUpdateAction = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_UPDATE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`${API_ROOT}/api/products/${product._id}`, product, config);

    dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
    dispatch({ type: PRODUCT_EDIT_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    //Check token het han thi logout
    if (message === "Not authorized, Token failed") {
      dispatch(logoutAction());
    }
    dispatch({
      type: PRODUCT_UPDATE_FAIL,
      payload: message,
    });
  }
};