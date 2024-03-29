// import React, { Fragment, useState } from 'react';
import React, { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CarProvider from './components/store/CarProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
    console.log("모달 보임");
  }
  const hideCartHandler = () => {
    setCartIsShown(false);
    console.log("모달 안보임");
  }

  return (
    // <Fragment>
    <CarProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CarProvider>
    // </Fragment>
  );
}

export default App;
