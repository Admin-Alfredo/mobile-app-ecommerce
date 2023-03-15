import styled from "styled-components/native";

export const Burg = styled.View`
  width: 100%;
  margin: 20px auto;
  display: flex;
  position: relative;
  background-color: #fff;
  padding: 5px;
  padding-top: 0;
  elevation: 3;
`
export const Header = styled.View`
  position: relative;
  margin-bottom: 15px;
`

export const Name = styled.Text`
  font-size: 25px;
  color: #fff;
  font-weight: 700;
  text-align:center ;

`
export const WrapperPreco = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

`

export const Preco = styled.Text`
  font-size: 45px;
  font-weight: bold;
  color: orange;
`

export const WrapperName = styled.View`
  width: 100%;
  background-color: #000;
  opacity: .7;
  z-index: 10;
`
export const BurgImage = styled.Image`
  width: 100%;
  aspect-ratio: ${props => props.ratio};
  margin-top: -35px;

`
export const Footer = styled.View`

`
export const Buttons = styled.View`
  flex-direction: row;
  background-color: #f4f4f4;
  margin: -5px;
  margin-top: 0;
  padding: 6px;
`

export const Descrition = styled.Text`
  font-size: 18px;

`
export const ButtonBuy = styled.TouchableHighlight`
  background-color: orange;
  color:#fff;
  border-radius: 5px;
  padding: 10px 15px;
  align-items:center ;
  
  margin: 0 7px 0px 0px;
`
export const TextButtonBuy = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
`

export const ButtonInfo = styled.TouchableHighlight`
  background-color: #ccccfa;
  color:#fff;
  border-radius: 5px;
  padding: 10px 15px;
  align-items:center;
  margin: 0 7px;
`
export const TextButton = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 20;
`