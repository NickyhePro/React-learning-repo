import * as React from "react";
import "../DrawerToggle/DrawerToggle.css";

interface IProps {
  clicked: any;
}
export default class DrawerToggle extends React.Component<IProps> {
  public render() {
    return (
      <div className="DrawerToggle" onClick={this.props.clicked}>
        <div />
        <div />
        <div />
      </div>
    );
  }
}
