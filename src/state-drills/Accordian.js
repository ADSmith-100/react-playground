import React from "react";

class Accordian extends React.Component {
  static defaultProps = { sections: [] };

  state = {
    currentSectionIndex: 0,
  };

  handleButtonClick = (index) => {
    console.log("button clicked!", { index });
    this.setState({ currentSectionIndex: index });
  };

  render() {
    const buttons = this.props.sections.map((sections, index) => (
      <li
        className={`accordian-item ${
          this.state.currentSectionIndex === index ? "open" : "closed"
        }`}
        key={index}
      >
        <button onClick={() => this.handleButtonClick(index)}>
          {sections.title}
        </button>
        <p key={index.content}>{sections.content}</p>
      </li>
    ));

    return (
      <div>
        <ul>{buttons}</ul>
      </div>
    );
  }
}

export default Accordian;
