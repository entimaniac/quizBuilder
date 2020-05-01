import React from "react";

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  // setGender = (event) => {
  //   console.log(event.target.value);
  // };

  render() {
    return (
      <div>
        {this.props.data.prompt}
        <div
          onChange={(e) =>
            this.props.updateChoice(this.props.data.id, e.target.value)
          }
        >
          {this.props.data.choices.map((choice, index) => (
            <span>
              <input
                key={index}
                type="radio"
                value={choice}
                name={this.props.data.id}
              />{" "}
              {choice}
            </span>
          ))}
        </div>
      </div>
    );
  }
}

export default Question;
