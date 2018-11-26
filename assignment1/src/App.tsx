import * as React from 'react';
import './App.css';

import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends React.Component {
  
  public state = {
    content: "This is Nick!"
  }

  public onChangeHandler = (event: any) => {
    this.setState({
      content: event.target.value
    })
  }

  public render() {
    return (
      <div className="App">
      <h1>This is my first React assignment</h1>
        <UserInput content={ this.state.content } onChange={this.onChangeHandler}/>
        <UserOutput content={ this.state.content }/>
      </div>
    );
  }
}

export default App;
