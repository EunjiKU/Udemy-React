import React, { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
  const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  // const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);


  const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump : ''}`;

  useEffect(() => {
    // ✅ 하나 이상이 있는 경우에만 실행
    // if(cartCtx.items.length === 0) {
    if(items.length === 0) {
      return;
    }
    setBtnIsHighLighted(true);
    
    const timer = setTimeout(() => {
      setBtnIsHighLighted(false);
    }, 300)

    // ✅ useEffect에서 함수를 반환하면, 리액트에 의해 클린업 함수로 자동으로 호출된다.
    return () => {
      clearTimeout(timer);
    }
  }, [items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
        {numberOfCartItems}
      </span>
    </button>
  );
}

export default HeaderCartButton;