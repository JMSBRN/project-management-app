import { render } from '@testing-library/react';
import React from 'react';
import BoardForm from './BoardForm';

describe('<Form />', () => {
  it('should be ', () => {
    render(
      <BoardForm
        setchangeBoard={jest.fn()}
        BoardId={1}
        boards={[{ title: 'dfsadfas', text: 'fsdfsd' }]}
        setBoards={jest.fn()}
      />
    );
  });
});
