import "./App.css";
import ConnectMeta from "./components/connectWallet";
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom'
import Profile from "./components/Profile";
function App() {


  return (
    <div>
      <Router>
  <Switch>
    <Route exact path="/" component={ConnectMeta}></Route>
    <Route exact path="/myprofile" component={Profile}></Route>
  </Switch>
  </Router>
    </div>
  );
}

export default App;
