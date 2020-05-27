import React from 'react';

import M from 'materialize-css';
import '../css/FontUtility.css';
import '../js/fontUtility';

class FontUtility extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    M.AutoInit();
  }
  handleSelectChange = (e) => {
    this.props.handleSelectChange(e.target.value);
  };

  render() {
    return (
      <div className="select-container">
        <div className="input-field col s12">
          <select defaultValue={'DEFAULT'} onChange={this.handleSelectChange}>
            <option value="DEFAULT">Select Font Size</option>
            <option value="1.5">Small</option>
            <option value="3">Medium</option>
            <option value="4">Large</option>
          </select>
        </div>
      </div>
    );
  }
}

export default FontUtility;
