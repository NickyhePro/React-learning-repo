import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import "./Post.css";

class Post extends Component {
  render() {
    return (
      <article className="Post" onClick={this.props.clicked}>
      <h1>{this.props.title}</h1>
      <div className="Info">
        <div className="Author">{this.props.author}</div>
      </div>
    </article>
    );
  }
}

export default withRouter(Post);
