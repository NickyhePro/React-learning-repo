import * as React from "react";
import "../SideDrawer/SideDrawer.css";
import Logo from "src/components/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

interface IProps {
  show: boolean;
  closed: any;
}

export default class SideDrawer extends React.Component<IProps> {
  public render() {
    let sideDrawerClasses = "SideDrawer Close";
    if (this.props.show) {
      sideDrawerClasses = "SideDrawer Open";
    }

    return (
      <div>
        <Backdrop show={this.props.show} clicked={this.props.closed} />
        <div className={sideDrawerClasses}>
          <Logo height="11%" />
          <nav>
            <NavigationItems />
          </nav>
        </div>
      </div>
    );
  }
}
