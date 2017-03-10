import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return <h1>{`Test App 4`}</h1>;
  }
}

render(<App />, document.getElementById("app"));
