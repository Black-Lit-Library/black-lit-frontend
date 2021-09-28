import React from 'react';
import { render, screen } from '@testing-library/react';
import SignUpForm from './SignUpUser';
import { MemoryRouter } from 'react-router';

describe('sign up form', () => {
  it('renders sign up form on page', async () => {
    render(
      <MemoryRouter>
        <SignUpForm />
      </MemoryRouter>
    );

    const form = await screen.getByRole('form', { name: 'sign up' });
    expect(form).not.toBeEmptyDOMElement();
  });
});
