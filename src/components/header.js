import React from "react"
import styled from "styled-components"
import logo from "../images/logo.png"
import Nav from "./Nav"

const HeaderWrapper = styled.header`
  display: flex;
`

const Title = styled.h1`
  font-family: Roboto, sans-serif;
  margin: 0;
`

const Logo = styled.img`
  max-width: 45px;
  margin-right: 20px;
`

export default () => {
  return (
    <HeaderWrapper>
      <Logo src={logo} />
      <Title>Jordan Paz</Title>
      <Nav />
    </HeaderWrapper>
  )
}
