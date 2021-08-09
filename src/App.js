import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
    </Router>
  );
}

export default App;
