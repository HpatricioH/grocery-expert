/* eslint-disable no-undef */
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import SignUp from '../../Pages/SignUp/SignUp'

describe('Test SignUp', () => {
  it('render SignUp page', () => {
    const component = render(<SignUp />, { wrapper: BrowserRouter })

    const textInPage = component.getByText('Remember me')

    expect(textInPage).toBeInTheDocument()
  })
})
