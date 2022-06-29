//add to cart
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};
//remove from cart
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
