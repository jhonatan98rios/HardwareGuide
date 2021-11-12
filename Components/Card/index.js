
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { Text } from 'react-native'
import { Box, Description, Image, Bold, Price } from './style'

import { translate } from '../../locales'

function Card({item}) {
  return (
    <Box>

      { item.image && <Image source={{uri: item.image }} /> }
      { !item.image && <Icon name="info" size={26} color='#FFF'/> }
      
      <Description>
        { 
          item.name && 
          <Bold> {item.name} </Bold> 
        }

        { 
          item.moba.length > 0 && 
          <Text> {translate('card_slider.moba')}: {item.moba} </Text> 
        }

        {
          item.cpu &&
          <Text> 
            {translate('card_slider.cpu')}: {item.cpu} 
          </Text>
        }

        {
          item.storage &&
          <Text> 
            {translate('card_slider.storage')}: {item.storage} 
          </Text>
        }

        {
          item.ram &&
          <Text> 
            {translate('card_slider.ram')}: {item.ram} 
          </Text>
        }

        {
          item.gpu &&
          <Text> 
            {translate('card_slider.gpu')}: {item.gpu} 
          </Text>
        }

        { 
          item.screen && 
          <Text>
            {translate('card_slider.screen')}: {item.screen } 
          </Text> 
        }

        {
          item.so &&
          <Text> 
            {translate('card_slider.so')}: {item.so || 'Windows ou Linux'} 
          </Text>
        }

        {
          item.price &&
          <Price> 
            {translate('card_slider.price')}: {translate('card_slider.currency')}
            {item.price} 
          </Price>
        }
      </Description>
    </Box>
  );
}

export default Card
