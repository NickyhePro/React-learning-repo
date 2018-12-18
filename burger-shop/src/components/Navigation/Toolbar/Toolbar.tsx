import * as React from "react";
import "../Toolbar/Toolbar.css";
import Logo from "src/components/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

interface IProps {
    drawerToggleClicked: any;
}
export default class Toolbar extends React.Component<IProps> {
  public render() {
    return (
      <header className="Toolbar">
        <DrawerToggle clicked={this.props.drawerToggleClicked} />
        <Logo height="80%" />
        <nav className="DesktopOnly">
          <NavigationItems />
        </nav>
      </header>
    );
  }
}
