import React from "react";
import Robotscardcomponent from './robotsCardComponent';

const Robotslistcomponent = ( {robots} ) => {
  return (
    <>
    {
        robots.map((x, i) => {
            return (
                <Robotscardcomponent key={robots[i].id} robot={robots[i]} />
            )
        })
    }
    </>
  );
}

export default Robotslistcomponent;