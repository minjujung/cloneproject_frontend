import "./App.css";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configureStore";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { actionCreators as postActions } from "./redux/modules/post";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postActions.getPostDB());
  }, []);

  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/chat" component={Chat} />
      </ConnectedRouter>
    </div>
  );
}

export default App;
