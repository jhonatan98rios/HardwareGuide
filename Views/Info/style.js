import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #000000;
`

export const View = styled.View`
  width: 80%;
  height: 300px;
  align-items: center;
  border-radius: 8px;
  margin-top: 25%;
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

export const Text = styled(Title)`
  font-size: 14px;
`
