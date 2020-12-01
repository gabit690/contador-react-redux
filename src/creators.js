const INCREMENT_LOCAL_COUNTER = 'INCREMENT_LOCAL_COUNTER';
const DECREMENT_LOCAL_COUNTER = 'DECREMENT_LOCAL_COUNTER';
const INCREMENT_VISITOR_COUNTER = 'INCREMENT_VISITOR_COUNTER';
const DECREMENT_VISITOR_COUNTER = 'DECREMENT_VISITOR_COUNTER';

function incrementLocalCounter() {
  return { type: INCREMENT_LOCAL_COUNTER };
}

function decrementLocalCounter() {
  return { type: DECREMENT_LOCAL_COUNTER };
}

function incrementVisitorCounter() {
  return { type: INCREMENT_VISITOR_COUNTER };
}
  
function decrementVisitorCounter() {
  return { type: DECREMENT_VISITOR_COUNTER };
}

export {
  INCREMENT_LOCAL_COUNTER,
  DECREMENT_LOCAL_COUNTER,
  INCREMENT_VISITOR_COUNTER,
  DECREMENT_VISITOR_COUNTER,
  incrementLocalCounter,
  decrementLocalCounter,
  incrementVisitorCounter,
  decrementVisitorCounter
};