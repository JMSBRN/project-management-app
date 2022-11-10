import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkWrapper = styled(Link)`
  color: red;
  padding: 0 5px;
  text-decoration: none;
  :active {
    color: white;
    background-color: red;
  }
`;
