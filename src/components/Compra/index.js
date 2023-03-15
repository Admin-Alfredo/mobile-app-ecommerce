import React, { useContext } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import Context  from '../../Context'
import { Conatainer } from './styles'

export default function Compra() {
  const { dispatch,replacePage} = useContext(Context)

  return (
    <Conatainer>
      <Text>Finaliza a compra</Text>
      <TouchableHighlight onPress={() =>     replacePage( 'REPLACE_PAGE')}>
        <Text>Cardapio</Text>
      </TouchableHighlight>
    </Conatainer>
  )
}
