import * as React from "react";
import "./BurgerIngredient.css";

interface IProps {
  type: string;
}
export default class BurgerIngredient extends React.Component<IProps> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    let ingredient = null;

    switch (this.props.type) {
      case ("breadBottom"):
        ingredient = <div className="BreadBottom" />;
        break;
      case ("breadTop"):
        ingredient = (
          <div className="BreadTop">
            <div className="Seeds1" />
            <div className="Seeds2" />
          </div>
        );
        break;
      case ("meat"):
        ingredient = <div className="Meat" />;
        break;
      case ("cheese"):
        ingredient = <div className="Cheese" />;
        break;
      case ("salad"):
        ingredient = <div className="Salad" />;
        break;
      case ("bacon"):
        ingredient = <div className="Bacon" />;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}
