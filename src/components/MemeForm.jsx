import React from 'react';

import '../css/MemeForm.css';
import Instructions from './Instructions';
import Swatches from './Swatches';
import FontUtility from './FontUtility';

class MemeForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleTopTextChange = (e) => {
    const topText = e.target.value;
    this.props.handleTopText(topText);
  };

  handleBottomTextChange = (e) => {
    const bottomText = e.target.value;
    this.props.handleBottomText(bottomText);
  };

  render() {
    return (
      <div className="center">
        <Instructions />
        <Swatches handleTextColorChange={this.props.handleTextColorChange} />
        <FontUtility handleSelectChange={this.props.handleSelectChange} />
        <div id="form-container" className="row">
          <form>
            <div className="row">
              <div className="input-field col s12">
                <input
                  onChange={this.handleTopTextChange}
                  id="top-text"
                  name="toptext"
                  type="text"
                />
                <label htmlFor="top-text">Top text:</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  onChange={this.handleBottomTextChange}
                  id="bottom-text"
                  name="bottomtext"
                  type="text"
                />
                <label htmlFor="bottom-text">Bottom text:</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default MemeForm;
