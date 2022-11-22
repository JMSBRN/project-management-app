import { render } from '@testing-library/react';
import React from 'react';
import Footer from './Footer';

describe('<Footer />', () => {
  it('should be ', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment).toMatchSnapshot();
  });
});
