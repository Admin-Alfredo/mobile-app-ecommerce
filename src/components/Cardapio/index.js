import React, { useContext, useEffect, useState } from 'react'
import { View, FlatList, Text, TouchableHighlight } from 'react-native'
import Context from '../../Context'
import {
  Burg,
  BurgImage,
  Descrition,
  Name,
  WrapperName,
  ButtonBuy,
  TextButton,
  ButtonInfo,
  Buttons,
  Header,
  Footer,
  WrapperPreco,
  Preco,
  TextButtonBuy
} from './styles'

export default function Cardapio() {
  const [burguers, setBurguers] = useState([])

  const { replacePage, dispatch } = useContext(Context)
  useEffect(() => {
    // console.warn(state)
    const precos = ['5.000', '1.500', '2.000', '1.450', '500']
    async function loadBurger() {
      const response = await fetch('http://localhost:3300/api/burguers')
      const data = await response.json()
      const _datas = data.datas?.map(burg => {
        burg.preco = precos[Math.floor(Math.random() * 5)]
        return burg
      })
      setBurguers(_datas)
    }
    loadBurger()
  }, [])
  const handlerComprar = () => {
    replacePage('REPLACE_PAGE')
  }

  return (
    <View>
      <FlatList
        data={burguers}
        keyExtractor={burg => String(burg._id)}
        renderItem={({ item }) => (
          <Burg>
            <Header>
              <WrapperName>
                <Name>{item.nome}</Name>
              </WrapperName>
              <BurgImage ratio={item.aspectRatio} source={{ uri: item.url_image }} />
              <WrapperPreco>
                <Preco> {item.preco} Kz</Preco>
              </WrapperPreco>
            </Header>
            <Footer>
              <Buttons>
                <ButtonBuy>
                  <TextButtonBuy onPress={handlerComprar}>comprar</TextButtonBuy>
                </ButtonBuy>
                <ButtonInfo>
                  <TextButtonBuy>mais info</TextButtonBuy>
                </ButtonInfo>
              </Buttons>
            </Footer>
          </Burg>
        )}
      />
    </View>
  )
}
