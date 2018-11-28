import * as React from "react";
import Burger from "src/components/Burger/Burger";

export default class BurgerBuilder extends React.Component {
  public state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      chesse: 1,
      meat: 1
    }
  }

  public render() {
    return (
      <div>
        <Burger ingredients={this.state.ingredients}/>
        <div>Build control</div>
      </div>
    );
  }
}
