import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./index.css";

function App() {
  return (
    <Home />
    // <Router>
    //   <div>
    //     <Switch>
    //       <Route path="/" component={Home} />
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
