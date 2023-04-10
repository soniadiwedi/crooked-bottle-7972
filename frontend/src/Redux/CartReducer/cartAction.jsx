import axios from "axios";
import {
  PRODUCT_CART_SUCCESS,
  PRODUCT_CART_FAILURE,
  PRODUCT_CART_REQUEST,
  PRODUCT_REMOVE_FROM_CART,
  Increment_Item,
  CART_ITEM_EMPTY,
} from "./actionType";

export const getCartSuccess = (payload) => {
  return { type: PRODUCT_CART_SUCCESS, payload };
};

export const cartRequest = () => {
  return { type: PRODUCT_CART_REQUEST };
};

export const cartFailure = () => {
  return { type: PRODUCT_CART_FAILURE };
};
const removeFromCart = (id) => {
  return { type: PRODUCT_REMOVE_FROM_CART, payload: id };
};
const IncremtnCount = (id, val) => {
  return { type: Increment_Item, payload: { id, val } };
};


export const CartEmty=()=>{
return {type: CART_ITEM_EMPTY}
}


export const increment_decremtn_Cart_Item = (id, val) => (dispatch) => {
  dispatch(IncremtnCount(id, val));
};

export const addTocart = (data) => (dispatch) => {
  dispatch(getCartSuccess(data));
};
export const remove_Item_Cart = (id) => (dispatch) => {
  dispatch(removeFromCart(id));
};
export const getAllCart = () => (dispatch) => {
  dispatch(cartRequest());
  axios
    .get("https://light-ant-sock.cyclic.app/carts")
    .then((res) => {
      dispatch(getCartSuccess(res.data));
    })
    .catch((err) => {
      dispatch(cartFailure());
    });
};

export const removeItemCart = (id) => (dispatch) => {
  dispatch(cartRequest());
  axios
    .delete(`https://light-ant-sock.cyclic.app/products/${id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

