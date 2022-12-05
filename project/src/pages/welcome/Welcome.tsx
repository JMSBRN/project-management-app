import React from 'react';
import {
  Description,
  DescriptionWrapper,
  ImageAvatar,
  ImageWelcome,
  LinksDevelopers,
  LinksWrapper,
  ReversWrapper,
  WelcomeWrapper,
} from './Welcome.style';
import taskImg from '../../assets/img/taskImg.png';
import development from '../../assets/img/development.png';
import front from '../../assets/img/frontend.png';
import front2 from '../../assets/img/frontend2.png';
import teamlead from '../../assets/img/teamlead.png';
import telegram from '../../assets/img/telegram.png';
import linkedIn from '../../assets/img/linkedIn.png';
import github from '../../assets/img/github.png';
import { useTranslation } from 'react-i18next';

const Welcome = () => {
  const { t } = useTranslation();
  return (
    <WelcomeWrapper>
      <DescriptionWrapper>
        <ImageWelcome img={taskImg} />
        <Description>
          <h1>{t(`main.welcome.task-manager`)}</h1>
          {t(`main.welcome.task-description`)}
        </Description>
      </DescriptionWrapper>
      <ImageWelcome img={development} />
      <h2>{t(`main.welcome.team.team-title`)}</h2>
      <DescriptionWrapper>
        <ReversWrapper>
          <Description>
            <h3>{t(`main.welcome.team.team-member-1`)}</h3>
            <ul>
              <li>Teamlead</li>
              <li>Backend</li>
              <li>API</li>
            </ul>
            <LinksWrapper>
              <LinksDevelopers href={'https://t.me/jsmbrn'} img={telegram} />
              <LinksDevelopers
                href={'https://www.linkedin.com/in/zakhavai-aliaksandr-009bab73/'}
                img={linkedIn}
              />
              <LinksDevelopers href={'https://github.com/JMSBRN'} img={github} />
            </LinksWrapper>
          </Description>
          <ImageAvatar img={teamlead} />
        </ReversWrapper>
      </DescriptionWrapper>
      <DescriptionWrapper>
        <ImageAvatar img={front} />
        <Description>
          <h3>{t(`main.welcome.team.team-member-2`)}</h3>
          <ul>
            <li>Frontend</li>
            <li>Design</li>
            <li>Layout</li>
          </ul>
          <LinksWrapper>
            <LinksDevelopers href={'https://t.me/alex_shishkov1'} img={telegram} />
            <LinksDevelopers href={'https://www.linkedin.com/in/alexey-shishkov/'} img={linkedIn} />
            <LinksDevelopers href={'https://github.com/alexshishkov'} img={github} />
          </LinksWrapper>
        </Description>
      </DescriptionWrapper>
      <DescriptionWrapper>
        <ReversWrapper>
          <Description>
            <h3>{t(`main.welcome.team.team-member-3`)}</h3>
            <ul>
              <li>Frontend</li>
              <li>Tried not to spoil =)</li>
              <li>i18n, presentation</li>
            </ul>
            <LinksWrapper>
              <LinksDevelopers href={'https://t.me/sivelia'} img={telegram} />
              <LinksDevelopers href={'https://www.linkedin.com/in/botino-k/'} img={linkedIn} />
              <LinksDevelopers href={'https://github.com/botino-k'} img={github} />
            </LinksWrapper>
          </Description>
          <ImageAvatar img={front2} />
        </ReversWrapper>
      </DescriptionWrapper>
    </WelcomeWrapper>
  );
};

export default Welcome;
