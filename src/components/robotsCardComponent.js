import React from "react";
import '../style/style.css';
import "tachyons";

const Robotscardcomponent = ({robot}) => {
  return (
    <>
      <div className="bg-light-blue dib ma3 b--solid bw2 br4 grow shadow-5 tc">
        <img className="moving-left" alt="robot" src={`https://robohash.org/${robot.id}?200*200`} />
        <div>
          <h2>{robot.name}</h2>
          <p>{robot.email}</p>
        </div>
      </div>
    </>
  );
};

export default Robotscardcomponent;
