import React from 'react';
import { Lang, LanguageWrapper } from './Language.style';
import i18n from '../../localization/i18n';

const Language = () => {
  return (
    <LanguageWrapper>
      <Lang onClick={() => i18n.changeLanguage('en')}>En</Lang> /
      <Lang onClick={() => i18n.changeLanguage('ru')}>Ru</Lang>
    </LanguageWrapper>
  );
};

export default Language;
