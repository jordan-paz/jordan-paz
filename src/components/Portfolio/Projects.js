import React from "react"
import styled from "styled-components"
import ProjectCard from "./ProjectCard"

const ProjectList = styled.ul`
  padding: 0;
`

const projects = [
  {
    name: "Project #11",
  },
  {
    name: "Project #12",
  },
  {
    name: "Project #13",
  },
]

export default () => {
  return (
    <div>
      <ProjectList>
        {projects.map(project => (
          <li key={project.name}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ProjectList>
    </div>
  )
}
