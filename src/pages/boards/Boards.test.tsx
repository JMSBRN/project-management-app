import { render } from '@testing-library/react';
import React from 'react';
import Boards from './Boards';

describe('<Boards />', () => {
  it('should be rendering correctly', () => {
    const { asFragment } = render(<Boards />);
    expect(asFragment).toMatchSnapshot();
  });
});
