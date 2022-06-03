import { jest } from '@jest/globals'
import * as util from "./util.js"

it("TypeError: Cannot assign to read only property 'sum' of object '[object Module]'", () => {
  jest.spyOn(util, "sum")
    .mockImplementation(() => { return 2 })
  
  expect(sum(1, 2)).toBe(2);
})