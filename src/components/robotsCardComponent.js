import React from "react";
import "tachyons";

const Robotscardcomponent = (props) => {
  return (
    <>
      <div className="bg-light-blue dib ma3 b--solid bw2 br4 grow shadow-5 tc">
        <img alt="robot" src={`https://robohash.org/${props.robot.id}?200*200`} />
        <div>
          <h2>{props.robot.name}</h2>
          <p>{props.robot.email}</p>
        </div>
      </div>
    </>
  );
};

export default Robotscardcomponent;
