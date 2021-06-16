import React, { useEffect, useState } from "react";
import Robotslistcomponent from "./robotsListComponent";
import Robotssearchboxcomponent from "./robotsSearchBoxComponent";
import Scrollcomponent from './scrollComponent';
import "tachyons";

const Maincomponenthook = (props) => {
  const [robots, setRobots] = useState([]);
  const [searchField, setsearchField] = useState("");

  useEffect = (() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        setRobots(users);
      });
  }, []);

  onSearchFieldChange = (event) => {
    setsearchField(event.target.value);
  };

  const searchedRobots = robots.filter((robot) => {
    return robot.name
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  return (!robots.length) ?
  <h1>Loading</h1> :
   (
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
};

export default Maincomponenthook;