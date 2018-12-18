import * as React from "react";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

interface IProps {
  ingredients: any;
}
export default class Burger extends React.Component<IProps> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const transformedIngredients: any[] = [];
    Object.keys(this.props.ingredients).map(igKey => {
      for (let i = 0; i < this.props.ingredients[igKey]; i++) {
        transformedIngredients.push(<BurgerIngredient type={igKey} />);
      }
    });

    return (
      <div className="Burger">
        Start to add ingredients!
        <BurgerIngredient type="breadTop" />
        {transformedIngredients}
        <BurgerIngredient type="breadBottom" />
      </div>
    );
  }
}
