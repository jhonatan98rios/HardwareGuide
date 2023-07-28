import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Container, } from './style.js'

export function Icon({ name, size }) {

  const iconMap = {
    star: require('../../assets/icons/star.png'),
    laptop: require('../../assets/icons/laptop.png'),
    info: require('../../assets/icons/info.png'),
    'graduation-cap': require('../../assets/icons/graduation-cap.png'),
  }

  return (
    <Container>
        <Image
            source={iconMap[name]}
            fadeDuration={0}
            style={{ width: 20, height: 20 }}
        />
    </Container>
  );
}