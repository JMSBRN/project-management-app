import React from 'react';
import { LinkWrapper } from './Link.style';

interface ILinkProps {
  text: string;
  to: string;
}
const Link = (props: ILinkProps) => {
  const { text, to } = props;
  return <LinkWrapper to={to}>{text}</LinkWrapper>;
};

export default Link;
