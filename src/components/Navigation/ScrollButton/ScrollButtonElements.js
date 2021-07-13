import styled from "styled-components";
import { Link } from "react-scroll";

export const ScrollButton = styled(Link)`
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
