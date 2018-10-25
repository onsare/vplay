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
import ProtectedRoute from "./components/routes/ProtectedRoute";
import GuestRoute from "./components/routes/GuestRoute";
import Categories from "./components/pages/Categories";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <GuestRoute path="/login" exact component={LoginPage} />
          <GuestRoute path="/register" exact component={RegisterPage} />
          <ProtectedRoute path="/dashboard" exact component={Dashboard} />
          <ProtectedRoute path="/categories" exact component={Categories} />
          <ProtectedRoute path="/profile" exact component={Profile} />
          <ProtectedRoute path="/settings" exact component={Settings} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
