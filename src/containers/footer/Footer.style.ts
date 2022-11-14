import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  white-space: nowrap;
  background: white;
  padding: 20px;
  @media (max-width: 450px) {
    font-size: 15px;
  }
`;

export const LogoSchool = styled.a`
  width: 100px;
  height: 40px;
  background: url(https://rs.school/images/rs_school_js.svg) no-repeat;
  background-size: 100%;
`;

export const Autors = styled.div`
  width: 500px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  @media (max-width: 450px) {
    width: 300px;
  }
`;

export const AutorLink = styled.a`
  display: flex;
  background-size: 100%;
  text-decoration: none;
  color: black;
  :before {
    width: 20px;
    height: 20px;
    background-image: url("https://cdn-icons-png.flaticon.com/512/25/25231.png");
    background-size: 100%;
    content: "";
    float: right;
    margin-right: 5px;
  }
`;
