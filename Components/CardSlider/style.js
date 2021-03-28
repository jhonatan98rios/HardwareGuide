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

export const Image = styled.Image`
  padding: 8px;
  width: 110px;
  height: 100px;
  margin: -40px auto 16px;
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

export const Price = styled(Bold)`
  margin-top: 4px;
  color: #555;
`
