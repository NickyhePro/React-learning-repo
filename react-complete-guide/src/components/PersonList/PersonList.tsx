import * as React from "react";
import Person from "./Person/Person";

interface IProps {
  persons: Array<{ name: string; age: number }>;
  click: any;
  changed: any;
  showPersons: boolean;
}
export default class PersonList extends React.Component<IProps> {
  render() {
    if (this.props.showPersons) {
      return this.props.persons.map((person, index) => {
        return (
          <Person
            click={this.props.click.bind(this, index)}
            changed={this.props.changed.bind(this, event, index)}
            name={person.name}
            age={person.age}
            key={index}
          />
        );
      });
    }else{
        return null;
    }
  }
}
