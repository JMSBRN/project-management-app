import React from 'react';
import { Lang, LanguageWrapper } from './Language.style';

const Language = () => {
  return (
    <LanguageWrapper>
      <Lang>En</Lang> / <Lang>Ru</Lang>
    </LanguageWrapper>
  );
};

export default Language;
