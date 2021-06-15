import Robotslistcomponent from "./robotsListComponent";
import Robotssearchboxcomponent from "./robotsSearchBoxComponent";
import React, { Component } from "react";
import Scrollcomponent from './scrollComponent';
import "tachyons";

class Maincomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
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
    if (!this.state.robots.length) {
      return <h1>Loading</h1>;
    } else {
      return (
        <>
          <div className="tc">
            <h1>Robotic Friends</h1>
            <Robotssearchboxcomponent
              searchFieldChange={this.onSearchFieldChange}
            />
            <Scrollcomponent>
              <Robotslistcomponent robots={searchedRobots} />
            </Scrollcomponent>
          </div>
        </>
      );
    }
  }
}

export default Maincomponent;
