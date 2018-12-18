import * as React from "react";

interface IProps {
  ingredients: any;
  price: number;
  checkoutCanceld: any;
  checkoutContinued: any;
}
export default class OrderSummary extends React.Component<IProps> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    console.log(this.props.ingredients);
    const ingredientsSummary = Object.keys(this.props.ingredients).map(
      igKey => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}: </span>
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <div>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientsSummary}</ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)}$</strong></p>
        <p>Continue to checkout?</p>
        <button
          className="btn btn-danger"
          style={{ marginRight: "10px" }}
          onClick={this.props.checkoutCanceld}
        >
          CANCEL
        </button>
        <button
          className="btn btn-primary"
          onClick={this.props.checkoutContinued}
        >
          CONTINUE
        </button>
      </div>
    );
  }
}
