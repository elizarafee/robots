import Robotslistcomponent from "./robotsListComponent";
import Robotssearchboxcomponent from "./robotsSearchBoxComponent";
import Robots from "../robots";
import React, { Component } from "react";
import "tachyons";

class Maincomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: Robots,
      searchField: "",
    };
  }

  onSearchFieldChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const searchedRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <>
        <div className="tc">
          <h1>Robotic Friends</h1>
            <Robotssearchboxcomponent
              searchFieldChange={this.onSearchFieldChange}
            />
          <Robotslistcomponent robots={searchedRobots} />
        </div>
      </>
    );
  }
}

export default Maincomponent;
