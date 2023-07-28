
import React from 'react';
import { Dimensions, Text } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Entypo';
import { Box, Description, Image, Price, Container, ImageView } from './style'
import { ExternalLinkButton } from '../ExternalLinkButton'

import { translate } from '../../locales'

function Card({item}) {
  return (
    <Box>
      { 
        item.image && 
          <ImageView> 
            <Image source={{uri: item.image }} /> 
          </ImageView> 
      }

      { !item.image && <Icon name="info" size={26} color='#FFF'/> }
      
      <Description>
        { item.name && 
          <ExternalLinkButton url={item.link}>
            {item.name}
          </ExternalLinkButton>
        }

        { (item.moba && item.moba.length > 0) && 
          <Text> {translate('card_slider.moba')}: 
          {item.moba} </Text> 
        }

        <Text> 
          {translate('card_slider.cpu')}: 
          {item.cpu} 
        </Text>

        <Text> 
          {translate('card_slider.storage')}: 
          {item.storage} 
        </Text>

        <Text> 
          {translate('card_slider.ram')}: 
          {item.ram} 
        </Text>

        <Text> 
          {translate('card_slider.gpu')}: 
          {item.gpu} 
        </Text>

        { item.screen && 
          <Text>
            {translate('card_slider.screen')}: {item.screen } 
          </Text> 
        }

        <Text> 
          {translate('card_slider.so')}: 
          {item.so || 'Windows ou Linux'} 
        </Text>

        <Price> 
          {translate('card_slider.price')}: 
          {translate('card_slider.currency')}
          {item.price} 
        </Price>
      </Description>
    </Box>
  );
}

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
