import React from 'react';
import { LoaderWrapper } from './Loader.style';

interface ILoaderProps {
  isLoader: boolean;
}
const Loader = (props: ILoaderProps) => {
  return <LoaderWrapper isLoader={props.isLoader}>Loader</LoaderWrapper>;
};

export default Loader;
