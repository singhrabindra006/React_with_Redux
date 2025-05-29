const redux = require('redux');

const INITIAL_VALUE = {
  counter: 0,
};

// Reducer
const reducer = (store = INITIAL_VALUE, action) => {
  let newStore = store  
  if (action.type === 'INCREMENT') {
    return  newStore={ counter: store.counter + 1 };
  }
  else if (action.type==='DECREAMENT'){
    return  newStore={ counter: store.counter -1 };
  }
  else if (action.type==='ADDATION'){
    return  newStore={ counter: store.counter + action.payload.number };
  }
  else if (action.type==='SUBSTRACTION'){
    return newStore ={counter: store.counter - action.payload.number}
  }
  return newStore;
};

// Create store with reducer
const store = redux.createStore(reducer);

// Subscriber
const subscriber = () => {
  const state = store.getState();
  console.log(state);
};

store.subscribe(subscriber);

// Dispatch action
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREAMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'ADDATION', payload:{number: 7}});
store.dispatch({ type: 'SUBSTRACTION', payload:{number: 7}});
