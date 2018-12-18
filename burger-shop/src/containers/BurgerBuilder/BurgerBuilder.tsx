import * as React from "react";
import Burger from "src/components/Burger/Burger";
import BuildControls from "src/components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "src/components/Burger/OrderSummary/OrderSummary";
import axios from "axios";
import Spinner from "src/components/UI/Spinner/Spinner";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

interface IState {
  ingredients: any;
  totalPrice: number;
  checkouting: boolean;
  loading: boolean;
}

export default class BurgerBuilder extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      ingredients: null,
      totalPrice: 1,
      checkouting: false,
      loading: false
    };
    this.addIngredientHandler = this.addIngredientHandler.bind(this);
    this.removeIngredientHandler = this.removeIngredientHandler.bind(this);
    this.checkoutHandler = this.checkoutHandler.bind(this);
    this.checkoutCancelHandler = this.checkoutCancelHandler.bind(this);
    this.checkoutContinueHandler = this.checkoutContinueHandler.bind(this);
  }

  public render() {
    // Declare OrderSummary components
    let orderSummary = null;

    // Declare Burger and BurgerBuilder components
    let burger = <Spinner />;

    // Check if the ingredients have already been loaded
    if (this.state.ingredients) {
      burger = (
        <div>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            price={this.state.totalPrice}
            onCheckout={this.checkoutHandler}
          />
        </div>
      );

      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}
          checkoutCanceld={this.checkoutCancelHandler}
          checkoutContinued={this.checkoutContinueHandler}
        />
      );

      if (this.state.loading) {
        orderSummary = <Spinner />;
      }
    }

    return (
      <div>
        <Modal
          show={this.state.checkouting}
          modalClose={this.checkoutCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </div>
    );
  }

  public componentDidMount() {
    axios
      .get("https://burger-shop-9d552.firebaseio.com/ingredients.json")
      .then(res => {
        console.log(res.data);
        this.setState({
          ingredients: res.data
        });
      });
  }
  private checkoutHandler() {
    this.setState({
      checkouting: true
    });
  }

  private checkoutCancelHandler() {
    this.setState({
      checkouting: false
    });
  }

  private checkoutContinueHandler() {
    this.setState({
      loading: true
    });

    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice.toFixed(2),
      customer: {
        name: "Nick He",
        address: {
          street: "1 queen street",
          zipcode: "0621",
          country: "New Zealand"
        },
        phone: "021234123"
      }
    };
    axios
      .post("https://burger-shop-9d552.firebaseio.com/orders.json", order)
      .then(res => {
        this.setState({
          checkouting: false,
          loading: false
        });
      })
      .catch(err => {
        this.setState({
          checkouting: false,
          loading: false
        });
      });
  }

  private addIngredientHandler(type: string) {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;

    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + INGREDIENT_PRICES[type];

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    });
  }

  private removeIngredientHandler(type: string) {
    const oldCount = this.state.ingredients[type];
    if (oldCount > 0) {
      const updatedCount = oldCount - 1;
      const updatedIngredients = { ...this.state.ingredients };
      updatedIngredients[type] = updatedCount;

      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - INGREDIENT_PRICES[type];

      this.setState({
        ingredients: updatedIngredients,
        totalPrice: newPrice
      });
    }
  }
}
