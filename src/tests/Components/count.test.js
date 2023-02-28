/* eslint-disable no-undef */
import { render, fireEvent } from '@testing-library/react'
import { Count } from '../../utilities/Count'

describe('count', () => {
  it('count should increment by 1 when clicked', () => {
    const { getByText } = render(<Count />)
    const button = getByText('arrow_forward')
    fireEvent.click(button)
    expect(getByText('1')).toBeInTheDocument()
  })
})
