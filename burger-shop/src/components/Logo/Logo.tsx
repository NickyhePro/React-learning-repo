import * as React from "react";
import BurgerLogo from "../../assets/images/burger-logo.png";
import "../Logo/Logo.css";

interface IProps {
    height: string;
}
export default class Logo extends React.Component<IProps> {
  public render() {
    return (
      <div className="Logo" style={{height: this.props.height}}>
        <img src={BurgerLogo} alt="LOGO" />
      </div>
    );
  }
}
