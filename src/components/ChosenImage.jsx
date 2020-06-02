import React from 'react';

import '../css/ChosenImage.css';
import MemeForm from './MemeForm';
import Swatches from './Swatches';

class ChosenImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topText: '',
      bottomText: '',
      textColor: null,
      image: null,
    };
    this.imageRef = React.createRef();
    this.canvasRef = React.createRef();
    this.anchorRef = React.createRef();
  }

  componentDidUpdate() {
    const ctx = this.canvasRef.current.getContext('2d');
    let image = new Image();
    image.crossOrigin = 'anonymous';
    image.src = this.props.chosenImage;
    console.log(image);
    image.onload = () => {
      let count = 10,
        timer = setInterval(() => {
          count--;
          if (count % 2 == 1) {
            ctx.font = '32px Arial';
            ctx.fillStyle = this.state.textColor;
            ctx.textAlign = 'center';
            ctx.fillText(
              this.state.topText,
              this.canvasRef.current.width / 2,
              30
            );
            ctx.fillText(
              this.state.bottomText,
              this.canvasRef.current.width / 2,
              this.canvasRef.current.height
            );
            const dataURL = this.canvasRef.current.toDataURL('image/jpg');
            this.anchorRef.current.href = dataURL;
          } else {
            return;
          }
          if (count == 0) clearInterval(timer);
        }, 1000);
      ctx.drawImage(
        image,
        0,
        0,
        this.canvasRef.current.width,
        this.canvasRef.current.height
      );
    };
  }

  handleSubmit = (topText, bottomText) => {
    this.setState({
      topText,
      bottomText,
    });
  };
  handleTextColorChange = (textColor) => {
    this.setState({
      textColor,
    });
  };

  render() {
    return (
      <div>
        <div className="chosen-image-container">
          <canvas
            ref={this.canvasRef}
            id="chosen-image"
            width={this.props.chosenImageWidth || '400'}
            height={this.props.chosenImageHeight || '400'}
          ></canvas>
          {this.props.chosenImage === null ? null : (
            <div>
              <a ref={this.anchorRef} download className="download-btn">
                Download{' '}
              </a>
              <Swatches handleTextColorChange={this.handleTextColorChange} />
              <MemeForm handleSubmit={this.handleSubmit} />{' '}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ChosenImage;
