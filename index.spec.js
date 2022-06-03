import { jest } from '@jest/globals'
import { sum } from "./util.js"

it("TypeError: Assignment to constant variable.", () => {
  sum = jest.fn(() => { return 2 })
  expect(sum(1, 2)).toBe(2);
})