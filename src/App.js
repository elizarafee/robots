import Robotscardcomponent from './components/robotsCardComponent';
import {Robots} from './robots';

function App() {
  return (
    <div className="App">
      <Robotscardcomponent robot={Robots[0]}/>
      <Robotscardcomponent robot={Robots[1]}/>
      <Robotscardcomponent robot={Robots[2]}/>
      <Robotscardcomponent robot={Robots[3]}/>
      <Robotscardcomponent robot={Robots[4]}/>
      <Robotscardcomponent robot={Robots[5]}/>
      <Robotscardcomponent robot={Robots[6]}/>
      <Robotscardcomponent robot={Robots[7]}/>
    </div>
  );
}

export default App;
