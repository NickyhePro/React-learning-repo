import * as React from "react";
import "../Cockpit/Cockpit.css";

const cockpit = (props: any) => {
  let btnClass = "";

  if (props.showPersons) {
    btnClass = "red";
  }
  
  return (
    <div>
      <h1>This is my React app</h1>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
