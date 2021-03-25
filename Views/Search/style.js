import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #000000;
  justify-content: center;
`

export const Title = styled.Text`
  color: #4CC392;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  margin: 0px auto 16px;
  z-index: 1;
  width: 80%;
  text-align: center;
  font-weight: bold;
  text-shadow: 1px 1px 2px #000;
`

export const TextInput = styled.TextInput`
  height: 130px;
  width: 80%;
  padding: 12px;
  border-color: #ffffff;
  background-color: #000000;
  border-width: 1px;
  border-radius: 8px;
  margin: 0 auto;
  color: #ffffff;
  text-align: left;
  text-align-vertical: top;
`

export const Button = styled.TouchableOpacity`
  width: 80%;
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
  width: 75%;
  text-align: center;
  color: #ffffff;
  font-size: 12px;
  margin-top: 64px;
`
