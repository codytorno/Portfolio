import React from "react";
import {
  ProjectContainer,
  ProjectWrapper,
  Project,
  ProjectRow,
} from "./ProjectElements";
import { projectData } from "./Projects";

function ProjectSection() {
  return (
    <>
      <ProjectContainer id="projects">
        <ProjectWrapper>
          <ProjectRow>
            {projectData.map((project) => {
              return <Project key={project.Title}>{project.Title}</Project>;
            })}
          </ProjectRow>
        </ProjectWrapper>
      </ProjectContainer>
    </>
  );
}

export default ProjectSection;
