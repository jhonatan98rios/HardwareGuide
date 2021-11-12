import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #000000;
  justify-content: center;
`
  //background-color: #0a0a1a;

export const Title = styled.Text`
  color: #4CC392;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  margin: 0px auto 48px;
  z-index: 1;
  width: 90%;
  text-align: center;
  font-weight: bold;
  text-shadow: 1px 1px 2px #000;
`

export const TextInput = styled.TextInput`
  height: 130px;
  width: 85%;
  padding: 12px;
  border-width: 1px;
  border-color: #4CC392;
  border-radius: 8px;
  margin: 0 auto;
  color: #ffffff;
  text-align: left;
  text-align-vertical: top;
  background-color: #0a0a15;
`
  //background-color: #0F0F1F;

export const Button = styled.TouchableOpacity`
  width: 85%;
  height: 50px;
  margin: 16px auto 0px;
  background-color: #8257E6;
  border: none;
  font-size: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

export const Text = styled.Text`
  color: #ffffff;
`

export const Disclaimer = styled.Text`
  width: 80%;
  text-align: center;
  color: #ffffff;
  font-size: 12px;
  margin-top: 84px;
`
