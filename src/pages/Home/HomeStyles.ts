import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkCustom = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 0;
    left: -100%;
    background: #FFB400;
    transition: all 0.3s ease-in-out;
  }
  &:hover:before {
    left: 0;
  }
  &:hover {
    color: #FFB400;
  }
`;
