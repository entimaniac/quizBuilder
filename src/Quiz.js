import React from "react";
import "./Quiz.css";
import Question from "./Question";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      currentQuestion: 0,
      questions: [
        {
          id: 1,
          prompt: "this is true",
          choices: ["true", "false"],
          answer: "true",
          selectedChoice: null,
        },
        {
          id: 2,
          prompt: "this is false",
          choices: ["true", "false"],
          answer: "false",
          selectedChoice: null,
        },
      ],
    };
  }

  updateChoice = (id, choice) => {
    console.log(id);
    let deepCopy = JSON.parse(JSON.stringify(this.state.questions));

    deepCopy.find((question, i) => {
      if (question.id === id) {
        deepCopy[i].selectedChoice = choice;
        return true;
      }
      return false;
    });

    this.setState({ questions: deepCopy });
  };

  changeQuestions = (event) => {
    this.setState({
      currentQuestion:
        this.state.currentQuestion + (event.target.name === "next" ? 1 : -1),
    });
  };

  render() {
    let currentQuestion = this.state.questions[this.state.currentQuestion];
    return (
      <div>
        <div className="container">
          <div className="header">header</div>
          <div className="left">
            <button
              name="back"
              disabled={!this.state.currentQuestion}
              onClick={(e) => this.changeQuestions(e)}
            >
              back
            </button>
          </div>
          <div className="middle">
            <Question data={currentQuestion} updateChoice={this.updateChoice} />
          </div>
          <div className="right">
            <button
              name="next"
              disabled={
                !(this.state.currentQuestion < this.state.questions.length - 1)
              }
              onClick={(e) => this.changeQuestions(e)}
            >
              next
            </button>
          </div>
          <div className="footer">
            You are on question #{this.state.currentQuestion + 1} of{" "}
            {this.state.questions.length}
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
