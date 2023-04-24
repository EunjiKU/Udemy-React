import React from 'react';

import './CardItem.css';

const CardItem = (props) => {
  const classes = 'card ' + props.className;
  // className="card"을 가진 컨테이너 html 요소를 반환
  return <div className={classes}>{props.children}</div>
}

export default CardItem;