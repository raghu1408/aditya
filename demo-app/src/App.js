import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Aboutus from "./aboutus/aboutus";

function App() {
  return (
    <div className="App">
      <Router>
        
        <Switch>
          <Route path="/"component={Aboutus}/>
        </Switch>
       
      </Router>
    </div>
  );
}

export default App;
