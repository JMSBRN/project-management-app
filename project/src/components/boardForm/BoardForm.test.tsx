import { render } from '@testing-library/react';
import React from 'react';
import BoardForm from './BoardForm';

describe('<Form />', () => {
  it('should be ', () => {
    render(
      <BoardForm
        setchangeBoard={jest.fn()}
        boardId={1}
        boards={[
          {
            title: 'task',
            text: 'description',
            columns: [
              {
                title: 'To-do',
                items: [
                  {
                    id: '1',
                    Task: '1 tsak',
                    message: 'task',
                  },
                ],
              },
            ],
          },
        ]}
      />
    );
  });
});
