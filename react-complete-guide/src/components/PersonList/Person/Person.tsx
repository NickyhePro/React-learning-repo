import * as React from "react";
import "./Person.css";

interface IPersonProps {
  age: number;
  name: string;
  click(event: any): void;
  changed(event: any): void;
}

export default class Person extends React.Component<IPersonProps> {
  inputElement: any;
  constructor(props: any) {
    super(props);
    this.inputElement = React.createRef();
  }

  componentDidMount() {
      this.inputElement.current.focus();
  }
  
  public render() {
    return (
      <div className="Person">
        <p onClick={this.props.click}>
          I am {this.props.name} and I am {this.props.age} years old.
        </p>
        <input
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
        />
      </div>
    );
  }
}
