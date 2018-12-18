import * as React from "react";
import "../Layout/Layout.css";
import Toolbar from 'src/components/Navigation/Toolbar/Toolbar';
import SideDrawer from 'src/components/Navigation/SideDrawer/SideDrawer';

interface IState {
  showSideDrawer: boolean;
}
export default class Layout extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      showSideDrawer: true
    };

    this.sideDrawerClosedHandler = this.sideDrawerClosedHandler.bind(this);
    this.sideDrawerToggleHandler = this.sideDrawerToggleHandler.bind(this);
  }

  public render() {
    return (
      <div>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          show={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className="Content">{this.props.children}</main>
      </div>
    );
  }

  private sideDrawerClosedHandler() {
    this.setState({
      showSideDrawer: false
    });
  }

  private sideDrawerToggleHandler() {
    this.setState((preState) => {
      return {showSideDrawer: !preState.showSideDrawer}
    });
  }
}
