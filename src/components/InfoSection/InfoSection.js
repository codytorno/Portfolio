import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Description,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";
import { ScrollButton } from "../Navigation/ScrollButton/ScrollButtonElements";

const InfoSection = ({ data }) => {
  console.log(data);
  return (
    <>
      <InfoContainer lightBg={data.backgroundLight} id={data.id}>
        <InfoWrapper>
          <InfoRow imgStart={data.imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine> {data.topLine}</TopLine>
                <Heading lightText={data.textLight}> {data.headline}</Heading>
                <Description descriptionLight={data.descriptionLight}>
                  {data.description}
                </Description>
                <BtnWrap>
                  <ScrollButton
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={data.primary ? 1 : 0}
                    dark={data.dark ? 1 : 0}
                  >
                    {data.buttonLabel}
                  </ScrollButton>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={data.img} alt={data.alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
