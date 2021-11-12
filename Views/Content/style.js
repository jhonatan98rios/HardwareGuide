import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #000000;
`
  //background-color: #0a0a1a;

export const Title = styled.Text`
  text-align: center;
  width: 90%;
  margin: 32px auto 16px;
  color: #4CC392;
  font-size: 18px;
  font-weight: bold;
  text-shadow: 1px 1px 2px #000;
`

export const Text = styled(Title)`
  width: 90%;
  font-size: 14px;
  font-weight: normal;
  color: #ffffff;
  line-height: 18px;
  margin: 0px auto 16px;
`

export const Image = styled.Image`
  width: 110px;
  height: 100px;
  margin: -8px auto 8px;
`

export const Content = styled.View`
  width: 90%;
  border-radius: 24px;
  border-color: #4CC392;
  border-width: 1px;
  padding: 24px 8px 8px;
  margin: 16px auto;
`