import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LoginContainer from './components/Login/LoginContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import SidebarContainer from './components/Sidebar/SidebarContainer'
import Footer from './components/Footer/Footer'
import TerminalsContainer from './components/Terminals/TerminalsContainer'
import BuyersContainer from './components/Buyers/BuyersContainer';
import BuyerInfoContainer from './components/BuyerInfo/BuyerInfoContainer'
import NotFound from './components/404/NotFound';
import { connect } from 'react-redux';



class App extends Component {

  render() {

    if (!this.props.isAuth) {
      return (
        <div>
          <LoginContainer />
        </div>
      )
    }

    return (
      <div className="App">
        <HeaderContainer />
        <SidebarContainer />
        <div className="App-content">
          <Switch>
            <Route exact path="/" render={() => <h1>Стартовая страница</h1>}/>
            <Route path="/terminals" render={() => <TerminalsContainer />}/>
            <Route exact path="/buyers" render={() => <BuyersContainer />}/>
            <Route path="/buyers/:id" component={BuyerInfoContainer} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    )}
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {})(App);