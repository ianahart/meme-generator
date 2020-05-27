import React from 'react';

import '../css/ChosenImage.css';
import MemeForm from './MemeForm';
import Swatches from './Swatches';

class ChosenImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topText: null,
      bottomText: null,
      imageWidth: null,
      textColor: null,
      fontSize: null,
      margin: 0,
    };
    this.imageRef = React.createRef();
  }

  handleSelectChange = (fontSize) => {
    this.setState({
      fontSize,
    });
  };

  handleTopText = (text) => {
    this.setState({
      topText: text,
    });
  };
  handleBottomText = (text) => {
    this.setState({
      bottomText: text,
    });
  };
  handleTextColorChange = (textColor) => {
    this.setState({
      textColor,
    });
  };

  calculateMargin = () => {
    if (this.imageRef.current.clientHeight > 500) {
      this.setState({
        margin: 20,
      });
    } else {
      this.setState({
        margin: 3,
      });
    }
  };

  handleMemeCapture = () => {};

  componentDidMount() {
    this.setState({
      imageWidth: this.imageRef.current.clientWidth,
    });
  }

  render() {
    return (
      <div>
        <div
          onClick={this.handleMemeCapture}
          onLoad={this.calculateMargin}
          id="chosen-image"
          className="chosen-image-container capture"
        >
          <img
            onChange={this.calculateMargin}
            ref={this.imageRef}
            src={this.props.chosenImage}
          />
          <div
            style={{ width: this.state.imageWidth }}
            className="meme-text-container"
          >
            <p
              style={{
                color: this.state.textColor,
                fontSize: `${this.state.fontSize}rem`,
              }}
              className="meme-top-text"
            >
              {this.state.topText}
            </p>
            <p
              style={{
                color: this.state.textColor,
                fontSize: `${this.state.fontSize}rem`,
                marginTop: `${this.state.margin}rem`,
              }}
              className="meme-bottom-text"
            >
              {this.state.bottomText}
            </p>
          </div>
        </div>
        {this.props.chosenImage ? (
          <MemeForm
            handleSelectChange={this.handleSelectChange}
            handleTextColorChange={this.handleTextColorChange}
            handleBottomText={this.handleBottomText}
            handleTopText={this.handleTopText}
          />
        ) : null}
      </div>
    );
  }
}

export default ChosenImage;
