const initialState={
    cart : []
}

const handleCart =(state=initialState,action)=> {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case 'DELETE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((x) => x.id !== action.payload.id),
      };
    default:
      return state;
  }
}


export default handleCart;