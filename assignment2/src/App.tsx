import * as React from "react";
import "./App.css";

import Char from "./components/CharComponent";
import Input from "./components/InputComponent";
import Validation from "./components/ValidationComponent";

class App extends React.Component {
  public state = {
    chars: [],
    length: 0
  };

  public inputHandler = (event: any) => {
    const input: string = event.target.value;
    const newLength = input.length;

    const arr = input.split("");

    this.setState({
      chars: arr,
      length: newLength
    });
  };

  public deleteCharHandler = (index: number) => {
    const arr = [...this.state.chars];
    arr.splice(index, 1);
    const newLength = arr.length;

    this.setState({
      chars: arr,
      length: newLength
    });
  };

  public render() {
    let chars = null;

    if (this.state.length > 0) {
      chars = (
        <ul>
          {this.state.chars.map((char, index) => {
            return (
              <Char
                click={this.deleteCharHandler.bind(this, index)}
                char={char}
                key={index}
              />
            );
          })}
        </ul>
      );
    }

    return (
      <div className="App">
        <h1>This is assignment2</h1>
        <hr />
        <Input length={this.state.length} changed={this.inputHandler} />
        <Validation length={this.state.length} />
        {chars}
      </div>
    );
  }
}

export default App;
