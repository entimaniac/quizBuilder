import React from "react";
import Question from "./Question";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
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

  render() {
    return (
      <div>
        {this.state.questions.map((q, index) => (
          <Question key={q.id} data={q} updateChoice={this.updateChoice} />
        ))}
      </div>
    );
  }
}

export default Quiz;
