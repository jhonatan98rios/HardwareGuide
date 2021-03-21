import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  height: auto;
`

export const Block = styled(Container)`
  background-color: transparent;
  height: auto;
  max-height: 80%;
`

export const BackButton = styled.TouchableOpacity`
  width: 300px;
  height: 50px;
  border: none;
  font-size: 20px;
  background-color: transparent;
  margin: 0px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`
