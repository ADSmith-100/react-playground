import React from "react";

class Accordian extends React.Component {
  static defaultProps = { sections: [] };

  state = {
    currentSectionIndex: 0,
    visibility: false,
  };

  render() {
    const currentSection = this.props.sections[this.state.currentSectionIndex];
    if (this.state.visibility) {
        return (
            const items = this.props.sections.map((section, index) => (
      <li key={index}>
        {section.title}
        <p className="content">{currentSection.content}</p>
        <button>+</button>
      </li>
    ));
        )}


    return <div>{items}</div>;
  }
}

export default Accordian;
