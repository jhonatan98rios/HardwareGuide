
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { Text, Linking } from 'react-native'
import { Box, Description, Image, ImageContainer, Bold, Price, Button } from './style'

import { translate } from '../../locales'

function Card({item}) {

  return (
    <Box>

      { 
        item.image && 
        <ImageContainer>
          <Image source={{uri: item.image }} /> 
        </ImageContainer>
      }

      { !item.image && <Icon name="info" size={26} color='#FFF'/> }
      
      <Description>
        { 
          item.name?.length > 0 && 
          <Bold> {item.name} </Bold> 
        }

        { 
          item.moba?.length > 0 && 
          <Text> 
            {translate('card_slider.moba')}: {item.moba} 
          </Text> 
        }

        {
          item.cpu?.length > 0 &&
          <Text> 
            {translate('card_slider.cpu')}: {item.cpu} 
          </Text>
        }





        {
          item.storage?.length > 0 &&
          <Text> 
            {translate('card_slider.storage')}: {item.storage} 
          </Text>
        }

        {
          item.ram?.length > 0 &&
          <Text> 
            {translate('card_slider.ram')}: {item.ram} 
          </Text>
        }

        {
          item.gpu?.length > 0 &&
          <Text> 
            {translate('card_slider.gpu')}: {item.gpu} 
          </Text>
        }

        { 
          item.screen?.length > 0 && 
          <Text>
            {translate('card_slider.screen')}: {item.screen } 
          </Text> 
        }

        {
          item.so?.length > 0 &&
          <Text> 
            {translate('card_slider.so')}: {item.so || 'Windows ou Linux'} 
          </Text>
        }

        {
          item.price?.length > 0 &&
          <Price> 
            {translate('card_slider.price')}: {translate('card_slider.currency')}
            {item.price} 
          </Price>
        }

        {
          item.url?.length > 0 &&
          <Button onPress={() => Linking.openURL(item.url)}>
            <Text style={{color: '#ffffff'}}>
              Ver o produto
            </Text>
          </Button>
        }
      </Description>
    </Box>
  );
}

export default Card


/* 
Notebook para estudos
*/