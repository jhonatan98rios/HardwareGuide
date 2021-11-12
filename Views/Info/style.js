import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #000000;
`
  //background-color: #0a0a1a;

export const View = styled.View`
  width: 90%;
  height: 400px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  border-color: #4CC392;
  border-width: 1px;
`

export const Title = styled.Text`
  text-align: center;
  width: 90%;
  margin: 16px 0px 16px;
  color: #4CC392;
  font-size: 18px;
  font-weight: bold;
  text-shadow: 1px 1px 2px #000;
`

export const Text = styled(Title)`
  font-size: 14px;
  font-weight: normal;
  color: #ffffff;
  margin: 8px;
  line-height: 18px;
`
