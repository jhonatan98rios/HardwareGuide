import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #000000;
  justify-content: center;
`

export const View = styled.View`
  width: 90%;
  height: 300px;
  align-items: center;
  border-radius: 8px;
`

export const Title = styled.Text`
  text-align: center;
  width: 80%;
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
