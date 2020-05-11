import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import OptionsProfileCalc from './component/OptionsProfitCalc';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="AppContent">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/options-calculator">
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
