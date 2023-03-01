/* eslint-disable no-undef */

// test getApiGroceries
import { getApiGroceries } from '../../services/getApiGroceries'

describe('getApiGroceries', () => {
  it('should return an object', async () => {
    const response = await getApiGroceries()
    expect(typeof response).toBe('object')
  })
})
