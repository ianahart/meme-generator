import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import '../css/SingleImage.css';

class SingleImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spans: 0,
    };
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);
    this.setState({
      spans,
    });
  };

  handleImageClick = (e) => {
    this.props.handleChosenImage(e.target.src);
    this.props.getImageSize(e.target.clientHeight, e.target.clientWidth);
    scroll.scrollToBottom();
  };

  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <Link
          to="chosen-image"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <img
            onClick={this.handleImageClick}
            ref={this.imageRef}
            className="single-image"
            src={this.props.url}
            alt={this.props.text}
          />
        </Link>
      </div>
    );
  }
}

export default SingleImage;
