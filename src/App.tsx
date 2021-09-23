import React from "react";
import style from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages";

const App: React.FC = () => {
  return (
    <div className={style.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/signIn" render={() => <h1>signIn</h1>}></Route>
          <Route path="/register" render={() => <h1>register</h1>}></Route>
          <Route path="/detail/:id" render={() => <h1>detail</h1>}></Route>
          <Route render={() => <h1>404 Not Found</h1>}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App
