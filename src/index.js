import React, { Component } from "react";
import ReactDom from "react-dom";

import Post from "./component/Post";

class App extends Component {
  render() {
    const posts = [
      {
        thumb: "https://signoftherose.files.wordpress.com/2016/08/sea-05.jpg",
        title: "Californian beach",
        desc: "The best beachs that I can tell you"
      },
      {
        thumb:
          "https://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg",
        title: "Birds birds birds",
        desc: "Some birds"
      },
      {
        thumb:
          "https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg",
        title: "Sonic",
        desc: "The fastest animal according to cartoons"
      },
      {
        thumb:
          "https://vignette.wikia.nocookie.net/lumber-tycoon-2/images/a/a1/Moving_object.jpg/revision/latest?cb=20160621190743",
        title: "wtf",
        desc: "Is it moving? o.e"
      },
      {
        thumb:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_qGPPqfFRFOffwH_IfdfTXqmoNULSiELOUVzu2los_aF4COvVaw",
        title: "Universe",
        desc: "Just a cool pic I found online"
      }
    ];

    const postComponents = posts.map(p => (
      <Post thumb={p.thumb} title={p.title} desc={p.desc} />
    ));
    console.log(postComponents);

    return <React.Fragment>{postComponents}</React.Fragment>;
  }
}

ReactDom.render(<App />, window.document.getElementById("root"));
