import React, { useState } from 'react';

import MainHeader2 from './components/MainHeader/MainHeader2';
import Login2 from './components/Login/Login2';
import Home2 from './components/Home/Home';

function App2() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
  }
  const logoutHandler = () => {
    setIsLoggedIn(false);
  }

  return (
    <React.Fragment>
      <MainHeader2 isAuthenticated={isLoggedIn} onLogout={logoutHandler}></MainHeader2>
      <main>
        {!isLoggedIn && <Login2 onLogin={loginHandler}/>}
        {isLoggedIn && <Home2 onLogout={logoutHandler}/>}
      </main>
    </React.Fragment>
  );
}

export default App2;
