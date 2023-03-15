import React, { createContext, useCallback, useReducer, useState } from 'react'
import Cardapio from '../components/Cardapio'
import Compra from '../components/Compra'
const Context = createContext({})

const actions = {
  'REPLACE_PAGE': function (state, payload) {
    console.warn("REPLACE_PAGE")

    return {
      ...state, pages: state.pages.map((item) => {
        if (item.name == payload)
          return { ...item, isActived: true }
        return { ...item, isActived: false }
      })
    }
  }
}

export const Provider = function ({ children }) {
  const [pages, setPage] = useState([
    { component: <Compra />, name: 'COMPRA', isActived: false },
    { component: <Cardapio />, name: 'CARDAPIO', isActived: true },
  ])
  

  const [state, dispatch] = useReducer(function (state, action) {
    return actions[action.type] ? actions[action.type](state, action.payload) : state
  }, { pages })

  const replacePage = useCallback((nome, payload) => {
    // state = {...state, pages: state.pages.map(item => {
    //   if(item.nome === nome)
    //     return { ...item, isActived: true}
    //   return { ...item, isActived: false }
    // })}
    setPage(
      items => items.map((item) => {
        // console.warn(item.name)
        if(item.name == nome){
          item.isActived = true
          return item
        }
        item.isActived = false
        return item
      })
    )
  }, [setPage])

  return (
    <Context.Provider value={{
      replacePage,
      dispatch,
      state,
      pages
    }}>
      {children}
      {pages.name}
    </Context.Provider>
  )
}

export default Context