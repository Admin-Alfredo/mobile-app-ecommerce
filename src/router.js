import React from 'react'
import { Provider } from './Context'
import AppRouter from '.'

export default function Router() {
  return (
    <Provider>
      <AppRouter/>
    </Provider>
  )
}
