export const removeFromCart = (product) => {
    console.log(product.id)
return {
     type: "REMOVE_SELECTED",
     payload: product
    }
};