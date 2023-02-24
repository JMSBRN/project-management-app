import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import Auth from './Auth';
import { store } from '../../app/store';
import { MemoryRouter } from 'react-router-dom';

describe('<Auth />', () => {
  it('should be rendering correctly with props', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Auth isSingInForm={true} />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByText(/sign in Form/i)).toBeInTheDocument();
  });
});
