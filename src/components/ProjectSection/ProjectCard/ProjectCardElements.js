import styled from "styled-components";

export const ProjectCardContainer = styled.div`
  background: #01bf71;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  border: 2px solid;
  border-color: #01bf71;
  padding: 30px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.1s ease-in-out;
  color: white;

  &:hover {
    transform: scale(1.02);
    transition: all 0.1s ease-in-out;
    cursor: pointer;
    border-color: white;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const ProjectH2 = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`;

export const ProjectIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
