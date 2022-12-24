/* eslint-disable no-undef */
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Login } from '../../Components/Login/Login'

describe('Test Login', () => [
  it('Renders Login Component Correctly', () => {
    const component = render(<Login />, { wrapper: BrowserRouter })

    const textInPage = component.getByText('Login Page for Expert Grocery')

    expect(textInPage).toBeInTheDocument()
  })
])
