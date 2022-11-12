import styled from "styled-components";

interface ILinksNav {
  isAuth: boolean;
  burger: boolean;
  scroll: number;
}
interface IHeaderWrapper {
  scroll: number;
}

export const HeadersWrapper = styled.div<IHeaderWrapper>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: ${(props) => (props.scroll < 50 ? "white" : "lightgray")};
  transition: 0.7s;
  padding: 5px 0 5px 0;
  z-index: 1;
`;

export const LinksNavWrapper = styled.div<ILinksNav>`
  width: ${(props) => (props.isAuth ? "500px" : "320px")};
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 5%;
  @media (max-width: 650px) {
    width: 150px;
    height: ${(props) => (props.isAuth ? "200px" : "160px")};
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    position: fixed;
    top: 0;
    right: 0;
    background-color: ${(props) => (props.scroll < 50 ? "white" : "lightgray")};
    transform: ${(props) =>
      props.burger ? "translateX(0)" : "translateX(300%)"};
    transition: 0.7s;
    padding-left: 10px;
    margin-right: 0;
    z-index: 1;
  }
`;
