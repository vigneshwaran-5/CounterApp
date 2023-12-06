import "./App.css";
import { connect } from "react-redux";

import { increment, decrement } from "./redux/actionCreators.js";

function App({ count , increment , decrement}) {
  return (
    <div className="container">
      <h1>Counter App</h1>
      <p>Count : {count}</p>
      <button onClick = {increment}>Increment</button>
      <button onClick = {decrement}>Decrement</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch) => ({
  increment : ()=> dispatch(increment()),

  decrement : ()=> dispatch(decrement())
})

export default connect(mapStateToProps ,mapDispatchToProps )(App)
