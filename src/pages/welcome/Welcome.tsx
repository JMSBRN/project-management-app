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
import teamlead from '../../assets/img/teamlead.png';
import telegram from '../../assets/img/telegram.png';
import linkedIn from '../../assets/img/linkedIn.png';
import github from '../../assets/img/github.png';
import { deleteUserThunk } from 'features/api/thunks/deleteUserThunk';

const Welcome = () => {
  return (
    <WelcomeWrapper>
      <DescriptionWrapper>
        <ImageWelcome img={taskImg} />
        <Description>
          <h1>Task manager</h1>
          This is a task management application for any work needs. Accelerate teamwork with the
          ability to create and manage boards for any task. Simplify complex projects by breaking
          them down into levels of subtasks. Visualize your tasks and easily change their order.
        </Description>
      </DescriptionWrapper>
      <ImageWelcome img={development} />
      <h2>Teem</h2>
      <DescriptionWrapper>
        <ReversWrapper>
          <Description>
            <h3>Aleksandr Zakhavai</h3>
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
          <h3>Alexey Shishkov</h3>
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
    </WelcomeWrapper>
  );
};

export default Welcome;
