import React, { Component } from "react";
import Post from "../../../components/Post/Post";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import "../Posts/Posts.css";
import FullPost from "../FullPost/FullPost";

class Posts extends Component {
  state = {
    posts: []
  };

  render() {
    const posts = this.state.posts.map(post => {
      return (
        <Link to={"/posts/" + post.id} key={post.id}>
          <Post title={post.title} author={post.author} />
        </Link>
      );
    });

    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route path={this.props.match.url + "/:id"} exact component={FullPost} />
      </div>
    );
  }

  componentDidMount() {
    axios
      .get("/posts")
      .then(response => {
        const data = response.data.slice(0, 4);
        const posts = data.map(post => {
          return {
            ...post,
            author: "Max"
          };
        });

        this.setState({
          posts: posts
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default Posts;
