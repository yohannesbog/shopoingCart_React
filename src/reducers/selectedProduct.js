
export default function (state = { cart: []}, action) {
  console.log(action)
  switch (action.type) {

    case "PRODUCT_SELECTED":
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }

    case "REMOVE_SELECTED":
      console.log(action)
      
      return {
        ...state,
        cart: state.cart.filter(cart => action.payload.id !== cart.id)
      }

    case "ADD_QUANTITY":
      console.log(action)
      return {
        ...state,
        cart: [...state.cart.filter(cart => action.id !== cart.id), 
          increamentQuantity(state.cart, action) ]
      }

    default:
      return state;
  }

};

function increamentQuantity(cart, action){
  let cart1 = cart.filter(cart => action.id === cart.id)[0]
   cart1.count = cart1.count + 1
   return cart1

     
}