import React, { Component } from "react";

const withStyle = style => WrappedComponent => {
  return class WithStyle extends Component {
    render() {
      const { props } = this;

      return (
        <WrappedComponent style={{ ...style }} {...props}>
          {props.children}
        </WrappedComponent>
      );
    }
  };
};

export default withStyle;
