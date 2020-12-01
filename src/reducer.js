import { INCREMENT_LOCAL_COUNTER, DECREMENT_LOCAL_COUNTER, INCREMENT_VISITOR_COUNTER, DECREMENT_VISITOR_COUNTER } from "./creators";

const initialState = {
  localCounter: 0,
  visitorCounter: 0
};
  
function reducer(state = initialState, action) {
  switch(action.type) {
    case INCREMENT_LOCAL_COUNTER: 
      return {
        ...state,
        localCounter: state.localCounter + 1
      };
    case DECREMENT_LOCAL_COUNTER: 
      return {
        ...state,
        localCounter: state.localCounter - 1
      };
    case INCREMENT_VISITOR_COUNTER: 
      return {
        ...state,
        visitorCounter: state.visitorCounter + 1
      };
    case DECREMENT_VISITOR_COUNTER: 
      return {
        ...state,
        visitorCounter: state.visitorCounter - 1
      };
    default:
      return state;
  };
}

export default reducer;