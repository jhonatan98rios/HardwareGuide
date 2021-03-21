import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #000000;
  justify-content: center;
  position: absolute;
  top: 0px;
  height: 100%;
`

export const Title = styled.Text`
  text-align: center;
  width: 80%;
  margin-top: 48px;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  text-shadow: 1px 1px 2px #000;
`

export const Text = styled(Title)`
  font-size: 14px;
`

export const BackButton = styled.TouchableOpacity`
  width: 300px;
  height: 50px;
  border: none;
  font-size: 20px;
  background-color: transparent;
  margin: 0px;
  border-radius: 10px;
  display: flex;
  align-items: center;
`
