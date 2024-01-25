const redux = require('redux');

                  // 현재의 상태, 액션
const couterReducer = (state = { couter: 0 }, action) => {
  if(action.type == 'increment') {
    // 새로운 상태를 리턴
    return {
      couter: state.couter + 1
    };
  }
  if(action.type == 'decrement') {
    // 새로운 상태를 리턴
    return {
      couter: state.couter - 1
    };
  }

  return state;
}

const store = redux.createStore(couterReducer);

const couterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
}

store.subscribe(couterSubscriber);

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });