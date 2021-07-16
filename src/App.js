import "./App.css";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configureStore";
import Main from "./pages/Main";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
      </ConnectedRouter>
    </div>
  );
}

export default App;
