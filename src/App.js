import React, { Component, Fragment } from "react";
import { createPortal } from "react-dom";

class ErrorMaker extends Component {
  state = {
    friends: ["jisu", "flynn", "daal", "kneeprayer"]
  };
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        friends: undefined
      });
    }, 2000);
  };
  render() {
    const { friends } = this.state;
    return friends.map(friend => ` ${friend} `);
  }
}

class Portals extends Component {
  componentDidCatch = (error, info) => {
    console.log(`cached ${error} the info i have is ${JSON.stringify(info)}`);
  };
  render() {
    return createPortal(<Message />, document.getElementById("touchme"));
  }
}

const Message = () => "Just touched it!";

class ReturnTypes extends Component {
  render() {
    return "hello";
  }
}

function App() {
  return (
    <Fragment>
      <ReturnTypes />
      <Portals />
      <ErrorMaker />
    </Fragment>
  );
}

export default App;
