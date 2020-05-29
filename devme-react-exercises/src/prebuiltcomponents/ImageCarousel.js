import React, { Component } from 'react';
import Carousel from 'react-images';

const images = [
        { source: 'https://cutt.ly/ke3x2y5' },
        { source: 'https://cutt.ly/ee3x2lR' },
        { source: 'https://cutt.ly/re3x2LP' },
    ];

class ImageCarousel extends Component {
  render() {
    return <Carousel views={ images } />;
  }
}

export default ImageCarousel;