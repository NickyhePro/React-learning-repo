import * as React from "react";
import "./BuildControl.css";

interface IProps {
  label: string;
}
export default class BuildControl extends React.Component<IProps> {
  public render() {
    return (
      <div className="BuildControl">
        <div className="Label">{this.props.label}</div>
        <button className="More">Add</button>
        <button className="Less">Remove</button>
      </div>
    );
  }
}
