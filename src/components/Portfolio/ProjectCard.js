import React from "react"
import styled from "styled-components"

const CardWrapper = styled.div`
  display: flex;
  border: 1px solid #fff;
`

export default ({ project }) => (
  <CardWrapper>
    <h3>{project.name}</h3>
    <div></div>
  </CardWrapper>
)
