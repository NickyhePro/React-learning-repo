import React, { Component } from "react";

const asyncComponent = importCompomemt => {
  return class extends Component {
    state = {
      component: null
    };

    render() {
        const C = this.state.component;

        return C ? <C {...this.props} /> : null;
    }

    componentDidMount() {
      importCompomemt().then(cmp => {
        this.setState({
          component: cmp.default
        });
      });
    }
  };
};

export default asyncComponent;
