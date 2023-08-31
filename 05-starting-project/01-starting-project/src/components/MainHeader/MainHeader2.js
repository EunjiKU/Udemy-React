import React from 'react';

import Navigation2 from './Navigation2';
import classes from './MainHeader.module.css';

const MainHeader2 = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation2 isLoggedIn={props.isAuthenticated} onLogout={props.onLogout}></Navigation2>
    </header>
  )
}

export default MainHeader2;