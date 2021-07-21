import styled from "styled-components";
import { Link as LinkRoute } from "react-router-dom";
import { FaAngleRight, FaAngleDoubleRight } from "react-icons/fa";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
  height: 100vh;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const ResumeButton = styled.a`
  border-radius: 50px;
  white-space: nowrap;
  text-decoration: none;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-items: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  background: #01bf71;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (!primary ? "#fff" : "#010606")};
    color: ${({ primary }) => (!primary ? "#010606" : "#fff")};
  }
`;

export const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  --o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: white;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  color: white;
  margin-top: 24px;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  color: white;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled(LinkRoute)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  text-decoration: none;
  color: #010606;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: #010606;
  }
`;

export const ArrowForward = styled(FaAngleRight)`
  color: white;
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(FaAngleDoubleRight)`
  color: black;
  margin-left: 8px;
  font-size: 20px;
`;
