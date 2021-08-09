import React, { useState } from "react";
import {
  HeroContainer,
  HeroBackground,
  VideoBackground,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  ResumeButton,
} from "./HeroElements";

const HeroSection = ({ data }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id={data.hero.id}>
      <HeroBackground>
        <VideoBackground
          autoPlay
          loop
          playsInline
          muted
          src={data.hero.video}
          type="video/mp4"
        />
      </HeroBackground>
      <HeroContent>
        <HeroH1> {data.hero.title}</HeroH1>
        <HeroP>
          {data.aboutMe.occupation}. {data.hero.description}.
        </HeroP>
        <HeroBtnWrapper>
          <ResumeButton
            href={data.hero.resumelink}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Resume {hover ? <ArrowRight /> : <ArrowForward />}
          </ResumeButton>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
