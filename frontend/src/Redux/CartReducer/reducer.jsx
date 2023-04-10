import {
  PRODUCT_CART_SUCCESS,
  PRODUCT_CART_FAILURE,
  PRODUCT_CART_REQUEST,
  PRODUCT_REMOVE_FROM_CART,
  Increment_Item,
  CART_ITEM_EMPTY,
} from "./actionType";

const initialState = {
  isLoading: false,
  carts: [],
  cartItem: [],
  totalPrice: 0,
  delivery: 50,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_CART_REQUEST:
      return { ...state, isLoading: true };
    case PRODUCT_CART_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case PRODUCT_CART_SUCCESS:
      return { ...state, isLoading: false, cartItem:[...state.cartItem,{...payload,quantity:1}] };
    case PRODUCT_REMOVE_FROM_CART:
      return {...state,cartItem:[...state.cartItem.filter((el)=>el.id!==payload)]}
      case Increment_Item:
        return {...state,cartItem:[
          ...state.cartItem.map((el)=>{
            if(el.id==payload.id){
              el.quantity=el.quantity+payload.val;
            }
            return el;
          })
        ]}

        case CART_ITEM_EMPTY:
          return {...state,cartItem:[]}
      default:
      return state;
  }
};
