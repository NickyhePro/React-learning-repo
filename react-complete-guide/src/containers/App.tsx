import * as React from "react";
import "./App.css";
import PersonList from "../components/PersonList/PersonList";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends React.Component {
  public state = {
    otherState: "Some other values",
    persons: [
      { name: "Nick", age: 27 },
      { name: "Alex", age: 28 },
      { name: "James", age: 37 }
    ],
    showPersons: false
  };

  public deletePersonHandler = (index: number) => {
    // Get a copy of the original array
    const updatedPersons = [...this.state.persons];
    updatedPersons.splice(index, 1);
    this.setState({
      persons: updatedPersons
    });
  };

  public nameChangedHandler = (event: any, index: number) => {
    const newPerson = {
      ...this.state.persons[index]
    };
    newPerson.name = event.target.value;

    const newPersons = [...this.state.persons];
    newPersons[index] = newPerson;

    this.setState({
      persons: newPersons
    });
  };

  public togglePersonsHandler = () => {
    const doesShow = !this.state.showPersons;
    this.setState({
      showPersons: doesShow
    });
  };

  public render() {
    return (
      <div className="App">
        <Cockpit
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        />
        {/* Persons section showing depends on the showPersons state */}
        <PersonList
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          click={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      </div>
    );
  }
}

export default App;
