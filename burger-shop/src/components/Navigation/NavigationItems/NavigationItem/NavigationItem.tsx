import * as React from "react";
import "../NavigationItem/NavigationItem.css";

interface IProps {
  link: string;
  active: boolean;
}
export default class NavigationItem extends React.Component<IProps> {
  public render() {
    return (
      <li className="NavigationItem">
        <a href={this.props.link} className={this.props.active ? "active" : ""}>
          {this.props.children}
        </a>
      </li>
    );
  }
}
