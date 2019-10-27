import React from "react"
import styled from "styled-components"

const NavBar = styled.nav`
  margin: auto 0 auto auto;
  @media only screen and (max-width: 700px) {
    display: none;
  }
`

const NavItem = styled.li`
  font-family: Roboto, sans-serif;
  font-size: 25px;
  display: inline;
  margin-left: 20px;
`

export default () => (
  <NavBar>
    <ul>
      <NavItem>WORK</NavItem>
      <NavItem>ABOUT</NavItem>
      <NavItem>CONTACT</NavItem>
    </ul>
  </NavBar>
)
