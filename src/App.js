import Robotslistcomponent from './components/robotsListComponent';
import {Robots} from './robots';

function App() {
  return (
    <div className="App">
      <Robotslistcomponent robots={Robots} /> 
    </div>
  );
}

export default App;
