import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #0a0a1a;
  justify-content: flex-end;
`

export const View = styled.View`
  width: 100%;
  height: 95%;
  align-items: center;
  border-radius: 8px;
`

export const Title = styled.Text`
  text-align: center;
  width: 80%;
  margin: 0px auto;
  color: #4CC392;
  font-size: 18px;
  font-weight: bold;
  text-shadow: 1px 1px 2px #000;
`

export const Text = styled.Text`
  text-align: center;
  color: #fff;
`

export const ScrollView = styled.ScrollView`
  width: 100%;
  margin-top: 32px;
`

export const TouchableOpacity = styled.TouchableOpacity`
  border: 1px solid #4CC392;
  background-color: rgba(255,255,255,.1);
  width: 90%;
  height: 72px;
  margin: 0 auto;
  margin-bottom: 12px;
  border-radius: 8px;
  justify-content: center;
`

