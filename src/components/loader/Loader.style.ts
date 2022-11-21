import styled from 'styled-components';

interface ILoaderProps {
  isLoader: boolean;
}
export const LoaderWrapper = styled.div<ILoaderProps>`
  position: absolute;
  top: 30%;
  left: 30%;
  width: 200px;
  height: 100px;
  background-color: red;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  display: ${({ isLoader }) => (isLoader ? 'visible' : 'none')};
  z-index: 10;
`;
