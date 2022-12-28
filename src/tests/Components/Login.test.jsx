/* eslint-disable no-undef */
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { LoginForm } from '../../Components/LoginForm/LoginForm'

describe('Test Login', () => [
  it('Renders Login Component Correctly', () => {
    const component = render(<LoginForm />, { wrapper: BrowserRouter })

    const textInPage = component.getByText('Sign In')

    expect(textInPage).toBeInTheDocument()
  })
])
