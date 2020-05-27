import React from 'react';

import '../css/Swatches.css';
class Swatches extends React.Component {
  constructor(props) {
    super(props);
  }

  handleTextColorChange = (e) => {
    this.props.handleTextColorChange(e.target.value);
  };
  render() {
    return (
      <div className="swatches-container">
        <button onClick={this.handleTextColorChange} value="#ef5350"></button>
        <button onClick={this.handleTextColorChange} value="#42a5f5"></button>
        <button onClick={this.handleTextColorChange} value="#66bb6a"></button>
        <button onClick={this.handleTextColorChange} value="white"></button>
        <button onClick={this.handleTextColorChange} value="black"></button>
      </div>
    );
  }
}

export default Swatches;
