import CartContext from './cart-context';

const CarProvider = props => {
  const addItemToCartHandler = item => {};

  const removeItemFromCartHandler = id => {};

  const carContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  }

  return <CartContext.Provider value={carContext}>
    {props.children}
  </CartContext.Provider>
}

export default CarProvider;