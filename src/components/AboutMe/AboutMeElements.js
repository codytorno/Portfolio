import styled from "styled-components";

export const AMContainer = styled.div`
  color: white;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};
  padding: 100px 25px;
  display: grid;
  align-items: center;
  grid-template-areas:
    "title title"
    "col1 col2";

  @media screen and (max-width: 1048px) {
    grid-template-areas:
      "title"
      "col1"
      "col2";
  }
`;
export const AMTitle = styled.h2`
  font-size: 40px;
  color: black;
  margin-top: 10px;
  padding-bottom: 40px;
  grid-area: title;

  @media screen and (max-width: 1048px) {
    text-align: center;
  }
`;

export const AMWrapper = styled.div`
  grid-area: col2;
`;

export const AMDetailsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  grid-gap: 0px;

  @media screen and (max-width: 1500px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 1048px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 660px) {
    grid-template-columns: 1fr;
  }
`;

export const AMDescription = styled.p`
  font-size: 20px;
  padding: 20px 0px;
`;

export const AMImageWrapper = styled.div`
  margin: auto;
  grid-area: col1;
`;

export const AMImage = styled.img`
  width: 250px;

  @media screen and (max-width: 1048px) {
    grid-template-columns: 300px;
  }
`;

export const AMDescriptionWrapper = styled.div`
  color: black;
  max-width: 800px;
  text-align: justify;
  text-indent: 0px;
`;
