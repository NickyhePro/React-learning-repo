import * as React from "react";
import "../Backdrop/Backdrop.css";

interface IProps {
  show: boolean;
  clicked: any;
}

export default class Backdrop extends React.Component<IProps> {
  public render() {
    return this.props.show ? (
      <div className="Backdrop" onClick={this.props.clicked} />
    ) : null;
  }
}
