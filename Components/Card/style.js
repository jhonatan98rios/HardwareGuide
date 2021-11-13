import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  display: flex;
  margin-top: 20px;
  max-height: 360px;
`

export const Bold = styled.Text`
  font-weight: bold;
  color: #8257E6;
  margin: -12px 0px 4px;
  text-align: center;
`

export const ImageContainer = styled.View`
padding: 8px;
width: 115px;
height: 115px;
margin: -64px auto 24px;
border-radius: 55px;
border: 2px solid #4CC392;
background-color: #fff;
display: flex;
justify-content: center;
align-items: center;
`

export const Image = styled.Image`
  padding: 8px;
  width: 110px;
  height: 110px;
  border-radius: 55px;
`

export const Box = styled.View`
  width: 100%;
  height: auto;
  min-height: 240px;
  margin: 56px 10px 0px;
  background-color: #fff;
  border-radius: 10px;
  border: 2px solid #4CC392;
  text-align: left;
  padding: 5px 12px 0px;
  top: 0px;
  bottom: 0px;
  margin-bottom: auto;
  margin-top: auto;
`

export const Description = styled.View`
  padding-bottom: 8px;
`

export const Price = styled(Bold)`
  margin-top: 8px;
  color: #555;
`

export const Button = styled.TouchableOpacity`
  background-color: #4CC392;
  width: 90%;
  height: 40px;
  margin: 8px auto 0px;
  margin-bottom: 12px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`
