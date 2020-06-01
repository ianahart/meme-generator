import React from 'react';

import '../css/MemeForm.css';

class MemeForm extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const topText = e.target.elements.toptext.value;
    const bottomText = e.target.elements.bottomtext.value;
    this.props.handleSubmit(topText, bottomText);
    e.target.elements.toptext.value = '';
    e.target.elements.bottomtext.value = '';
  };
  render() {
    return (
      <div>
        <div id="form-container" className="row">
          <form autocomplete="off" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input id="top-text" name="toptext" type="text" />
                <label htmlFor="top-text">Top text:</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="bottom-text" name="bottomtext" type="text" />
                <label htmlFor="bottom-text">Bottom text:</label>
              </div>
            </div>
            <button type="submit" className="add-text">
              Add Text
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default MemeForm;
