
import React from 'react';
import { Dimensions, Text } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Entypo';
import { Box, Description, Image, Bold, Container } from './style'

function Card({item}) {
  return (
    <Box>
      { item.image && <Image source={{uri: item.image }} /> }
      { !item.image && <Icon name="info" size={26} color='#FFF'/> }
      
      <Description>
        <Text> CPU: {item.cpu} </Text>
        <Text> Placa Mãe: {item.moba} </Text>
        <Text> Armazenamento: {item.storage} </Text>
        <Text> Ram: {item.ram} </Text>
        <Text> GPU: {item.gpu} </Text>
        <Text> Tela: {item.screen || 'Não acompanha'}  </Text>
        <Text> Sistema: {item.so || 'Windows ou Linux'} </Text>
        <Bold> Valor aproximado: R$ {item.price} </Bold>
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
