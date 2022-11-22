import { render } from '@testing-library/react';
import React from 'react';
import Board from './Board';

describe('<Baords />', () => {
  it('should be ', () => {
    const { asFragment } = render(<Board />);
    expect(asFragment).toMatchSnapshot();
  });
});
