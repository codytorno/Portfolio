import styled from "styled-components";

export const AMDetailContainer = styled.div`
  display: grid;
  margin: auto;
  padding: 10px;
  grid-template-areas: "col1 col2";
  color: black;
`;

export const AMColumn1 = styled.div`
  width: 100px;
  grid-area: col1;
`;

export const AMColumn2 = styled.div`
  width: 250px;
  grid-area: col2;
`;

export const AMImageWrap = styled.div`
  height: 100%;
  text-align: center;
`;

export const AMDetailTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};
`;

export const AMDetailDescription = styled.p`
  max-width: 440px;
  margin-top: 10px;
  font-size: 18px;
  color: ${({ descriptionLight }) => (descriptionLight ? "#fff" : "#010606")};
`;
