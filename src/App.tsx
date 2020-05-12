import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import OptionsProfileCalc from './component/OptionsProfitCalc';
import PathUtil from './util/PathUtil';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="AppContent">
        <Router>
          <Switch>
            <Route exact path={PathUtil.getPath('/')}>
              <Home></Home>
            </Route>
            <Route path={PathUtil.getPath('/options-calc')}>
              <OptionsProfileCalc></OptionsProfileCalc>
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
