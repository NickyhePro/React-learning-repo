import React, { Component } from "react";
import axios from "axios";
import "./FullPost.css";

class FullPost extends Component {
  state = {
    selectedPost: null
  };

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.match.params.id && this.state.selectedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.selectedPost.title}</h1>
          <p>{this.state.selectedPost.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deleteDataHandler}>
              Delete
            </button>
          </div>
        </div>
      );
    }

    return post;
  }

  deleteDataHandler = () => {
    axios.delete("/posts/" + this.props.match.params.id).then(response => {
      console.log(response);
    });
  };

  loadData() {
    if (this.props.match.params.id) {
      if (
        !this.state.selectedPost ||
        (this.state.selectedPost &&
          this.state.selectedPost.id !== +this.props.match.params.id)
      ) {
        axios
          .get(
            "https://jsonplaceholder.typicode.com/posts/" +
              this.props.match.params.id
          )
          .then(response => {
            this.setState({
              selectedPost: response.data
            });
          });
      }
    }
  }

  //  Only be called after the component has been rendered
  componentDidMount() {
    this.loadData();
  }

  // Only be called after the prop
  componentDidUpdate() {
    this.loadData();
  }
}

export default FullPost;
