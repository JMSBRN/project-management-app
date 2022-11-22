import { render } from '@testing-library/react';
import React from 'react';
import EditProfile from './EditProfile';

describe('<EditProfile />', () => {
  it('should be ', () => {
    const { asFragment } = render(<EditProfile />);
    expect(asFragment).toMatchSnapshot();
  });
});
