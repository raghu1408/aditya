import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Aboutus from "./aboutus/aboutus";
import Contact from "./contact/contact";
import Ourstaff from "./ourstraff/ourstaff";

function App() {
  return (
    <div className="App">
      <Router>
        
        <Switch>
          {/* <Route path="/"component={Aboutus}/> */}
          <Route path="/"component={Contact}/>
          {/* <Route path="/"component={Ourstaff}/> */}
        </Switch>
       
      </Router>
    </div>
  );
}

export default App;
