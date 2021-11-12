
import React from 'react';
import { Dimensions, Text } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import Card from '../Card'
import { Container } from './style'

import { translate } from '../../locales'

function CardSlider({content}) {

  const isCarousel = React.useRef(null)
  const sliderWidth = Dimensions.get('window').width
  const itemWidth = Math.round(sliderWidth * 0.8)

  return (
    <Container>
      <Carousel
        ref={isCarousel}
        data={content}
        renderItem={Card}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
      />
    </Container>
  );
}

export default CardSlider
