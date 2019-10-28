import React from "react"
import styled from "styled-components"
import Projects from "./Projects"

const Heading = styled.h2`
  font-family: Roboto;
  font-size: 35px;
  margin-top: 60px;
`

export default () => (
  <>
    <Heading>My work</Heading>
    <Projects />
  </>
)
