import styled from "styled-components";

export const WelcomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(to right, #44a08d, #093637);
  color: white;
  padding-top: 20px;
  padding-bottom: 50px;
  h2 {
    font-weight: 100;
    font-size: 40px;
  }
  @media (max-width: 1150px) {
    h2 {
      font-size: 25px;
    }
  }
`;

export const DescriptionWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  margin-top: 50x;
  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
  }
`;

type PropsImg = {
  img: string;
};

export const ImageWelcome = styled.div<PropsImg>`
  width: 700px;
  height: 550px;
  background: url(${(props) => props.img}) no-repeat;
  background-size: 100%;
  margin-top: 50px;
  @media (max-width: 1150px) {
    width: 400px;
    height: 300px;
  }
  @media (max-width: 450px) {
    width: 300px;
    height: 250px;
  }
`;

export const Description = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 22px;
  h1 {
    font-weight: 100;
    font-size: 40px;
  }
  h3 {
    font-weight: 100;
    font-size: 26px;
    margin-top: 50px;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  li {
    font-size: 22px;
    list-style-type: none;
  }
  @media (max-width: 1150px) {
    width: 300px;
    font-size: 16px;
    h1 {
      font-size: 30px;
    }
  }
`;

export const ImageAvatar = styled.div<PropsImg>`
  width: 300px;
  height: 300px;
  background: url(${(props) => props.img}) no-repeat;
  background-size: 100%;
  margin-top: 50px;
`;

export const ReversWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const LinksWrapper = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-around;
`;

type PropsLink = {
  img: string;
};

export const LinksDevelopers = styled.a<PropsLink>`
  width: 30px;
  height: 30px;
  background: url(${(props) => props.img}) no-repeat;
  background-size: 100%;
  filter: invert(90%);
  :hover {
    filter: invert();
  }
`;
