import React from 'react'
import { Container, Logo } from './styles'

export default function ToolBatr({ title }) {
  return (
    <Container>
      <Logo>{title }</Logo>
    </Container>
  )
}
