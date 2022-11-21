import React from 'react';
import { LoaderAnimation } from './Loader.style';

interface ILoaderProps {
  isLoader: boolean;
}
const Loader = (props: ILoaderProps) => {
  return <LoaderAnimation isLoader={props.isLoader} />;
};

export default Loader;
