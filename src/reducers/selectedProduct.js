export default function (state = { cart: [] }, action) {
  console.log(action)
  switch (action.type) {
    case "PRODUCT_SELECTED":
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
      break;
      // case 'REMOVE_FROM_CART':
      //   return state
      //     .map(item => (item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item))
      //     .filter(item => item.qty > 0);
    default:
      return state
  }

}