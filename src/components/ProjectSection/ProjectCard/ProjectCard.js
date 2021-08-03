import React from "react";
import {
  ProjectH2,
  ProjectIcon,
  ProjectDescription,
  ProjectCardContainer,
} from "./ProjectCardElements";

const ProjectCard = ({ Icon, Title, Description }) => {
  return (
    <ProjectCardContainer>
      <ProjectIcon src={Icon} />
      <ProjectH2>{Title}</ProjectH2>
      <ProjectDescription>{Description}</ProjectDescription>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
