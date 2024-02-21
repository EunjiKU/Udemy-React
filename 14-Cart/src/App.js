import { useSelector, useDispatch } from 'react-redux';
import { Fragment, useEffect, useState } from 'react';
import { uiActions } from './store/ui-slice';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);
  
  useEffect(() => {
    const sendCartDate = async () => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!'
      }));
      const response = await fetch('https://kej-react-default-rtdb.firebaseio.com/cart.json', {
        method: "PUT",
        body: JSON.stringify(cart)
      });

      // 문제 발생~~
      if(!response.ok) {
        // dispatch(uiActions.showNotification({
        //   status: 'error',
        //   title: 'Error!',
        //   message: 'Sending cart data failed!'
        // }));

        throw new Error('Sending cart data failed!!!');
      }

      // 통과~~
      // const responseData = await response.json();
      // console.log(responseData);

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!'
      }));
    }

    // 처음 로딩(시작) 할 때만 막기
    if(isInitial) {
      isInitial = false;
      return;
    }

    sendCartDate().catch(error => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!'
      }));
    });
  }, [cart, dispatch])

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;