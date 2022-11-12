import styled from "styled-components";

export const LanguageWrapper = styled.div`
  width: 55px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: 0.6s;
`;

export const Lang = styled.div`
  cursor: pointer;
  margin: 3px;
  :hover {
    font-size: 23px;
    margin: 1.5px;
  }
`;
