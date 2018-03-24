import React from "react";
import data from "../../data/warehouse.json";

export class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: []
    };
  }
  render() {
    return (
      <div>
        <table />
      </div>
    );
  }
}
