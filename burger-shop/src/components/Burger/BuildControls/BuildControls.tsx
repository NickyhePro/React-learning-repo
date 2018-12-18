import * as React from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

interface IProps {
  ingredientAdded: any;
  ingredientRemoved: any;
  price: number;
  onCheckout: any;
}
export default class BuildControls extends React.Component<IProps> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <div className="BuildControls">
        <p>Current price: <strong>{this.props.price.toFixed(2)}$</strong></p> 
        {controls.map(ctrl => (
          <BuildControl
            label={ctrl.label}
            type={ctrl.type}
            key={ctrl.label}
            onIngredientAdded={this.props.ingredientAdded}
            onIngredientRemoved={this.props.ingredientRemoved}
          />
        ))}
        <button className="OrderButton" onClick={this.props.onCheckout}>Checkout</button>
      </div>
    );
  }
}
