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
import Video from "../../videos/video.mp4";

const Location = "Fort Worth";
const Occupation = "Mechanical Engineer & Software Developer";
const description = "I love challenging problems and learning new things.";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBackground>
        <VideoBackground autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBackground>
      <HeroContent>
        <HeroH1> Im Cody Torno </HeroH1>
        <HeroP>
          Based in {Location}. {Occupation}. {description}.
        </HeroP>
        <HeroBtnWrapper>
          <ResumeButton
            href="https://drive.google.com/uc?export=download&id=1XCoh8aaFyLbih3Vn-_hlL4UYs8ntDDCD"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get Resume {hover ? <ArrowRight /> : <ArrowForward />}
          </ResumeButton>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
