import Constants from 'expo-constants';
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native'
import { Container, View, Title, Text, TouchableOpacity, ScrollView } from './style.js'

import { translate } from '../../locales'

import { AdMobInterstitial } from 'expo-ads-admob';

const testID = 'ca-app-pub-3940256099942544/1033173712';
const productionID = 'ca-app-pub-1739197497968733/1150081283';
const adUnitID = Constants.isDevice && !__DEV__ ? productionID : testID;

export default function Info({ navigation }) {

  const [ data, setData ] = useState(null)

  useEffect(() => {
    async function showInterstitial(){
      try{
        await AdMobInterstitial.requestAdAsync();
        await AdMobInterstitial.showAdAsync();
      }
      catch(e){
        console.log(e);
      }    
    }
    AdMobInterstitial.setAdUnitID(adUnitID); 
    showInterstitial()
  }, [])

  useEffect(()=>{
    axios.post(translate('learn.endpoint'))
    .then(response => setData(response.data))
    .catch(reject => console.log(reject))
  }, [])

  function navigate(item){
    navigation.navigate('Conteudo', {
      item
    });
  }

  return (
    <Container>   
      <View style={{width:'100%'}}>
        <Title> {translate('learn.title')} </Title>

        { data && <ScrollView>
          { data.map((item, index) => (
            <TouchableOpacity 
              key={index}
              onPress={()=>{ navigate(item) }}
            >
              <Text>
                { item.title }
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>  }

        { !data && <ActivityIndicator color="#8257E6" size="large" /> }

      </View>
    </Container>
  );
}
