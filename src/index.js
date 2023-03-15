import React, { useContext, useState } from 'react'
import { View, Text } from 'react-native'
import { Container } from './styles'
import ToolBar from './components/ToolBar'
import Context from './Context'
import Cardapio from './components/Cardapio'

function Loading(props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Loading...</Text>
    </View>
  )
}
export default function App() {
  const {state, pages} = useContext(Context)
  // console.warn(Object.keys(state.pages))
  return (
    <>
      <ToolBar title="Big Burguer" />
      <Container>
        {pages?.filter(page => page.isActived)[0].component}
      </Container>
    </>
  )
}