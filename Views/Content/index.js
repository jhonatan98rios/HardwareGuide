import React from 'react';
import { View, ScrollView } from 'react-native'
import { Container, Title, Text, Image, Content } from './style.js'

export default function Info({ route }) {

  const { item } = route.params;

  return (
    <Container>   
      <ScrollView style={{ width: '100%'}}>
        <View style={{ flex: 1, justifyContent: 'center' }}> 
          <Title> {item.title} </Title>

          { item.content.map((el, index) => (
            <Content key={index}>
              { el.subtitle && <Title> {el.subtitle} </Title> }
              { el.image && <Image source={{ uri: el.image }} resizeMode="contain" /> }
              { el.description && <Text> {el.description} </Text>}
            </Content>
          ))}

        </View>
      </ScrollView>
    </Container>
  );
}
