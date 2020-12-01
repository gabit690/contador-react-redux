import { connect } from "react-redux";
import { incrementLocalCounter, decrementLocalCounter, incrementVisitorCounter, decrementVisitorCounter } from "./creators";
import App from "./App";

function mapStateToProps(state) {
  return {
    localCounter: state.localCounter,
    visitorCounter: state.visitorCounter
  };
}
  
const mapDispatchToProps = {
  incrementLocalCounter,
  decrementLocalCounter,
  incrementVisitorCounter,
  decrementVisitorCounter,
};
  
const Counter = connect(mapStateToProps, mapDispatchToProps)(App);

export default Counter;