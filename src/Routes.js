import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Flashcard from "./Flashcard";
import Quiz from "./Quiz";
import App from "./App";

class Routes extends Component {
  // Data
  state = {};
  // Functions
  // Render
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/flashcards" component={Flashcard} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/" exact component={App} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
