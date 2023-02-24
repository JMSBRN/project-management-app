import React from 'react';
import { render, screen } from '@testing-library/react';
import { store } from 'app/store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Form from './Form';

describe('<Form />', () => {
  it('should be rendering correctly with props ', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Form label="test_form" />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByText(/test_form/i)).toBeInTheDocument();
  });
});
