import React, { Component } from "react";
import { quizData } from "./quizData";

class Quiz extends Component {
  // Data
  state = {
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    score: 0,
    disabled: true,
    isEnd: false
  };
  // Functions
  loadQuizData = () => {
    // console.log(quizData[0].question)
    this.setState(() => {
      return {
        questions: quizData[this.state.currentQuestion].question,
        answer: quizData[this.state.currentQuestion].answer,
        options: quizData[this.state.currentQuestion].options
      };
    });
  };

  // Render
  render() {
    return <div className="quiz"></div>;
  }
}

export default Quiz;
