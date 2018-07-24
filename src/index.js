import React, { Component } from "react";
import ReactDom from "react-dom";

import Website from "./component/Website";

class App extends React.Component {
  render() {
    return <Website />;
  }
}

ReactDom.render(<App />, window.document.getElementById("root"));
