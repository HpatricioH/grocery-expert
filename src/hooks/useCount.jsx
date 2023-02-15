import { useState } from 'react'

export const useCount = ({ quantity }) => {
  const [count, setCount] = useState(quantity)

  const handleIncrease = () => {
    if (count >= 0) setCount(count + 1)
  }

  const handleDecrease = () => {
    if (count > 0) setCount(count - 1)
  }

  return { count, handleIncrease, handleDecrease }
}
