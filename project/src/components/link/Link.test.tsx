import { render, screen } from '@testing-library/react';
import { store } from 'app/store';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Link from './Link';

describe('<Link />', () => {
  it('should be rendering correctly with props ', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Link text={'text_test'} to={'test_path'} />
        </MemoryRouter>
      </Provider>
    );
    const link = screen.getByText('text_test');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test_path');
  });
});
