/* eslint-disable no-undef */
import { render, fireEvent } from '@testing-library/react'
import { Count } from '../../utilities/Count'

describe('count', () => {
  it('count should increment by 1 when clicked', () => {
    let count = 0
    const handleIncrease = () => {
      count++
    }

    const { getByTestId } = render(<Count count={count} handleIncrease={handleIncrease} />)
    const increaseButton = getByTestId('ArrowRightIcon')
    fireEvent.click(increaseButton)
    expect(count).toBe(1)
  })

  it('count should decrement by 1 when clicked', () => {
    let count = 1
    const handleDecrease = () => {
      count--
    }

    const { getByTestId } = render(<Count count={count} handleDecrease={handleDecrease} />)
    const decreaseButton = getByTestId('ArrowLeftIcon')
    fireEvent.click(decreaseButton)
    expect(count).toBe(0)
  })
})
