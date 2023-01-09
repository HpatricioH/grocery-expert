/* eslint-disable no-undef */
import { getByLabelText, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { LoginForm } from '../../Components/LoginForm/LoginForm'

describe('Test Login', () => [
  it('Renders Login Component Correctly', () => {
    const { container } = render(<LoginForm />, { wrapper: BrowserRouter })

    const textInPage = getByLabelText(container, 'Email Address')

    expect(textInPage).toBeInTheDocument()
  })
])
