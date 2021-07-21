import styled from "styled-components";

export const ProjectContainer = styled.div`
  color: white;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
  }
`;

export const ProjectWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: calc(100vh - 80px);
  width: 100%;
  align-items: center;
`;

export const ProjectRow = styled.div`
  display: inline-block;
  overflow: auto;
  white-space: nowrap;
  margin-left: 50px;
  margin-right: 50px;

  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 768px) {
    scroll-snap-type: x mandatory;
    margin-left: 50px;
    margin-right: 0px;
  }
`;

export const Project = styled.div`
  display: inline-block;
  border: 3px solid white;
  background: white;
  width: 300px;
  height: 400px;
  margin-right: 50px;
  border-radius: 10px;
  padding: 20px;
  color: black;
  justify-content: center;
  text-align: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    scroll-snap-align: start;
    margin-right: 50px;
    width: 200px;
    height: 300px;
  }
`;
