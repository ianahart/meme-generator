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
    };
  }

  handleChosenImage = (imageSrc) => {
    this.setState({
      chosenImage: imageSrc,
    });
  };
  render() {
    return (
      <div>
        <div className="main-content">
          <NavBar title="Meme Maker" />
          <Header />
          <ImageGallery handleChosenImage={this.handleChosenImage} />
          <ChosenImage chosenImage={this.state.chosenImage} />
        </div>
        <Footer name="Ian Hart" />
      </div>
    );
  }
}

export default App;
