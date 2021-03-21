import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #000000;
  justify-content: center;
`

export const ScrollView = styled.ScrollView`
  width: 100%;
  margin-top: 24px;
`

export const View = styled.View`
  width: 80%;
  height: 80%;
  align-items: center;
  border-radius: 8px;
`

export const Title = styled.Text`
  text-align: center;
  width: 80%;
  margin-top: 16px;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  text-shadow: 1px 1px 2px #000;
`

export const TouchableOpacity = styled.TouchableOpacity`
  border: 1px solid #fff;
  background-color: #222;
  width: 100%;
  height: 64px;
  margin-bottom: 12px;
  border-radius: 8px;
  justify-content: center;
`

export const Text = styled.Text`
  text-align: center;
  color: #fff;
`
