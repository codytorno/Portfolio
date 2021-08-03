import styled from "styled-components";

// The container for the Project Section
export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
`;

export const ProjectWrapper = styled.div`
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 50px 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  text-align: center;
  margin-top: 24px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
