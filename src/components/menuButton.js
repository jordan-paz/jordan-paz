import React from "react"
import styled from "styled-components"
import { IconContext } from "react-icons"
import { FaBars } from "react-icons/fa"

const Button = styled.button`
  margin: auto 0 auto auto;
  background-color: transparent;
  border: none;
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: 0;
  }
`

export default () => (
  <Button>
    <IconContext.Provider value={{ color: "#fff" }}>
      <FaBars size={30} />
    </IconContext.Provider>
  </Button>
)
