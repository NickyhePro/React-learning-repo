import * as React from "react";
import "../Modal/Modal.css";
import Backdrop from "../Backdrop/Backdrop";

interface IProps {
  show: boolean;
  modalClose: any;
}
export default class Modal extends React.Component<IProps> {
  public render() {
    return (
      <div>
        <Backdrop show={this.props.show} clicked={this.props.modalClose} />
        <div
          className="Modal"
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? 1 : 0
          }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }

  public shouldComponentUpdate(nextProps: any, nextState: any) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }
}
