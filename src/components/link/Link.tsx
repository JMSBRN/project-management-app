import React from 'react';
import { LinkWrapper } from './Link.style';

interface ILinkProps {
  text: string;
  to: string;
}
const Link = (props: ILinkProps) => {
  return <LinkWrapper to={props.to}>{props.text}</LinkWrapper>;
};

export default Link;
