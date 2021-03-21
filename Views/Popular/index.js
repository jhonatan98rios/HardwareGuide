import React, { useState } from 'react';
import { Container, ScrollView, Title, View, TouchableOpacity, Text} from './style.js'
import { options } from '../../Mockdata/Popular'
import Modal from '../../Components/Modal';

export default function Popular() {

  const [ data, setData ] = useState(null)

  const closeModal = () => setData(null)

  return (
    <Container>
      <View>
        <Title> Selecione a opção que procura </Title>

        <ScrollView>
          { options.map((option, index) => (
            <TouchableOpacity 
              key={index}
              onPress={()=> setData(option.itens)}
            >
              <Text>
                { option.name }
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      { data && <Modal data={data} closeModal={closeModal} /> }
    </Container>
  );
}
