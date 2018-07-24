import React, { Component } from "react";

class MousePositionTracker extends Component {
  state = {
    position: 0
  };

  componentDidMount() {
    this.scrollEvent("add");
  }

  componentWillUpdate() {
    this.scrollEvent("remove");
    this.scrollEvent("add");
  }

  scrollEvent = action => {
    switch (action) {
      case "add":
        window.addEventListener("scroll", this.handleScroll);
        break;
      case "remove":
        window.removeEventListener("scroll", this.handleScroll);
        break;
    }
  };

  handleScroll = () => {
    this.setState({ position: window.scrollY });
  };

  render() {
    const { children } = this.props;
    const { position } = this.state;

    return children(position);
  }
}

export default MousePositionTracker;
