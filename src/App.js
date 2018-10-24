import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/partials/Header";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import Footer from "./components/partials/Footer";
import Profile from "./components/pages/ProfilePage";
import Settings from "./components/pages/SettingsPage";
import Dashboard from "./components/pages/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/register" exact component={RegisterPage} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/settings" exact component={Settings} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
