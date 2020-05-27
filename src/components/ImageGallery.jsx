import React from 'react';
import axios from 'axios';

import '../css/ImageGallery.css';
import SingleImage from '../components/SingleImage.jsx';
import Loader from '../components/Loader';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageData: [],
    };
  }

  async componentDidMount() {
    const response = await axios.get(
      'https://api.imgflip.com/get_memes?limit=10'
    );
    const { memes } = response.data.data;
    this.setState((prevState) => {
      return {
        imageData: prevState.imageData.concat(memes.slice(0, 20)),
      };
    });
  }

  render() {
    return (
      <div className="main-container">
        {this.state.imageData.length ? (
          <div className="gallery-container">
            {this.state.imageData.map((item) => {
              return (
                <SingleImage
                  handleChosenImage={this.props.handleChosenImage}
                  key={item.id}
                  text={item.name}
                  url={item.url}
                />
              );
            })}
          </div>
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}

export default ImageGallery;
