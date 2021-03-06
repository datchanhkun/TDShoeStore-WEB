import { 
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_RESET,
  PRODUCT_LIST_ADMIN_REQUEST,
  PRODUCT_LIST_ADMIN_SUCCESS,
  PRODUCT_LIST_ADMIN_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_RESET,
  PRODUCT_CREATE_FAIL,
  PRODUCT_EDIT_REQUEST,
  PRODUCT_EDIT_SUCCESS,
  PRODUCT_EDIT_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_RESET
} from "../Constants/productConstants.js"

export const productListReducer = (state = {products: []}, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: []}
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        pages: action.payload.pages,
        page: action.payload.page,
        products: action.payload.products
      }
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload}
    default:
      return state 
  }
}

export const productDetailsReducer = (state = {product: {reviews: []}} , action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true}
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload}
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload}
    default:
      return state 
  }
}

//Review
export const productCreateReviewReducer = (state = {} , action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true}
    case PRODUCT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true}
    case PRODUCT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload}
    case PRODUCT_CREATE_REVIEW_RESET:
      return {}
    default:
      return state 
  }
}

////ADMIN GET ALL PRODUCT
export const productListAdminReducer = (state = { products: []} , action) => {
  switch (action.type) {
    case PRODUCT_LIST_ADMIN_REQUEST:
      return { loading: true, products: []}
    case PRODUCT_LIST_ADMIN_SUCCESS:
      return { loading: false, products: action.payload}
    case PRODUCT_LIST_ADMIN_FAIL:
      return { loading: false, error: action.payload}
    default:
      return state 
  }
}

////ADMIN DELETE PRODUCT
export const productDeleteReducer = (state = {} , action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true}
    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true}
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload}
    default:
      return state 
  }
}

////ADMIN CREATE PRODUCT
export const productCreateReducer = (state = {} , action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true}
    case PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, product: action.payload}
    case PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload}
    case PRODUCT_CREATE_RESET:
      return {}
    default:
      return state 
  }
}

////ADMIN EDIT PRODUCT
export const productEditReducer = (state = {product: {reviews: []}} , action) => {
  switch (action.type) {
    case PRODUCT_EDIT_REQUEST:
      return { ...state, loading: true}
    case PRODUCT_EDIT_SUCCESS:
      return { loading: false, product: action.payload}
    case PRODUCT_EDIT_FAIL:
      return { loading: false, error: action.payload}
    default:
      return state 
  }
}

////ADMIN UPDATE PRODUCT
export const productUpdateReducer = (state = {product: {}} , action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { loading: true}
    case PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true, product: action.payload}
    case PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload}
    case PRODUCT_UPDATE_RESET:
      return { product: {}}
    default:
      return state 
  }
}