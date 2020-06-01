import React from 'react';

import '../css/App.css';
import NavBar from './NavBar.jsx';
import Header from './Header.jsx';
import ImageGallery from './ImageGallery.jsx';
import ChosenImage from './ChosenImage.jsx';
import Footer from './Footer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenImage: null,
      chosenImageHeight: null,
      chosenImageWidth: null,
    };
  }

  handleChosenImage = (imageSrc) => {
    this.setState({
      chosenImage: imageSrc,
    });
  };

  getImageSize = (height, width) => {
    this.setState({
      chosenImageHeight: height,
      chosenImageWidth: width,
    });
  };
  render() {
    return (
      <div>
        <div className="main-content">
          <NavBar title="Meme Maker" />
          <Header />
          <ImageGallery
            getImageSize={this.getImageSize}
            handleChosenImage={this.handleChosenImage}
          />
          <ChosenImage
            chosenImageWidth={this.state.chosenImageWidth}
            chosenImageHeight={this.state.chosenImageHeight}
            chosenImage={this.state.chosenImage}
          />
        </div>
        <Footer name="Ian Hart" />
      </div>
    );
  }
}

export default App;
