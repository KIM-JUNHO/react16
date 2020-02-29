import React, { Component, Fragment } from "react";

class ReturnTypes extends Component {
  render() {
    return "hello";
  }
}

function App() {
  return (
    <Fragment>
      <ReturnTypes />
    </Fragment>
  );
}

export default App;
