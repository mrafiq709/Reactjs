import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar";
import Products from "./components/products";
import Post from "./components/posts";
import Home from "./components/home";
import ItemDetail from "./components/itemDetail";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" exact component={Products} />
            <Route path="/products/:id" component={ItemDetail} />
            <Route path="/posts" component={Post} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
