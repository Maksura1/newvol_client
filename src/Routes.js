import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Flashcard from "./Study/Flashcard";
import Quiz from "./Assess/Assess";
import App from "./Main/App";

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
