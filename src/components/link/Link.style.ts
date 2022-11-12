import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkWrapper = styled(Link)`
  color: black;
  border: 1px solid black;
  border-radius: 10px;
  text-decoration: none;
  padding: 5px 15px;
  margin: 1.5px;
  :hover {
    color: white;
    background: black;
    transition: 0.6s;
    padding: 6px 16.5px;
    margin: 0;
  }
`;
