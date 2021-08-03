import React from "react";
import { ProjectContainer, ProjectWrapper, ProjectH1 } from "./ProjectElements";
import ProjectCard from "./ProjectCard/ProjectCard";
import { projectData } from "./Projects";

function ProjectSection() {
  return (
    <>
      <ProjectContainer id="projects" count={projectData.length}>
        <ProjectH1>
          Projects
          <ProjectWrapper>
            {projectData.map((project) => {
              return (
                <ProjectCard
                  Icon={null}
                  Title={project.Title}
                  Description={project.Description}
                />
              );
            })}
          </ProjectWrapper>
        </ProjectH1>
      </ProjectContainer>
    </>
  );
}

export default ProjectSection;
