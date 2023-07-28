import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  display: flex;
  margin-top: 20px;
  max-height: 360px;
`

export const ImageView = styled.View`
  width: 90px;
  height: 90px;
  margin: -48px auto 0px;
  border-radius: 90px;
  border: 2px solid #4CC392;
`

export const Image = styled.Image`
  width: 86px;
  height: 86px;
  border-radius: 90px;
  margin: 0;
`

export const Box = styled.View`
  width: 100%;
  height: auto;
  min-height: 240px;
  margin: 48px 10px 0px;
  background-color: #fff;
  border-radius: 10px;
  border: 2px solid #4CC392;
  text-align: left;
  padding: 5px 15px;
  top: 0px;
  bottom: 0px;
  margin-bottom: auto;
  margin-top: auto;
`

export const Description = styled.View`
  padding-bottom: 10px;
`

export const Price = styled.Text`
  font-weight: bold;
  margin-top: 4px;
  color: #555;
`
