import * as React from "react";
import "./BuildControl.css";

interface IProps {
  label: string;
  type: string;
  onIngredientAdded: any;
  onIngredientRemoved: any;
}
export default class BuildControl extends React.Component<IProps> {
  constructor(props: any) {
    super(props);
    this.addBtnHandler = this.addBtnHandler.bind(this);
    this.removeBtnHandler = this.removeBtnHandler.bind(this);
  }
  public render() {
    return (
      <div className="BuildControl">
        <div className="Label">{this.props.label}</div>
        <button className="More" onClick={this.addBtnHandler}>Add</button>
        <button className="Less" onClick={this.removeBtnHandler}>Remove</button>
      </div>
    );
  }

  private addBtnHandler() {
    this.props.onIngredientAdded(this.props.type);
  }

  private removeBtnHandler() {
    this.props.onIngredientRemoved(this.props.type);
  }
}
