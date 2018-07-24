import React, { Component } from "react";

import withStyle from "../hoc/withStyle";

const style = {
  container: {
    width: "200px",
    boxSizing: "border-box",
    border: "1px solid #eee",
    float: "left",
    marginRight: "5px"
  },
  thumb: {
    width: "100%"
  },
  content: {
    padding: "10px"
  },
  title: {
    marginTop: "0px"
  }
};

@withStyle(style)
class Post extends Component {
  render() {
    const { props } = this;
    const { style } = props;

    return (
      <div style={style.container}>
        <img style={style.thumb} src={props.thumb} />
        <div style={style.content}>
          <h3 style={style.title}>{props.title}</h3>
          <p>{props.desc}</p>
        </div>
      </div>
    );
  }
}

export default Post;
