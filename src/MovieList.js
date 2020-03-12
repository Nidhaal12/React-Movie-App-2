import React, { Component } from "react";
import Card from "./Card";

class ListMovie extends Component {
  render() {
    return (
      <div className="list-items">
        {this.props.movies.map(el => (
          <Card movie={el} />
        ))}
      </div>
    );
  }
}

export default ListMovie;