import React from "react";

class Question extends React.Component {
  render() {
    let data = this.props.data;
    return (
      <div>
        {this.props.data.prompt}
        <div onChange={(e) => this.props.updateChoice(data.id, e.target.value)}>
          {data.choices.map((choice, index) => (
            <span key={index}>
              <input
                type="radio"
                value={choice}
                checked={data.selectedChoice === choice}
                name={data.id}
              />
              {choice}
            </span>
          ))}
        </div>
      </div>
    );
  }
}

export default Question;
