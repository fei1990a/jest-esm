import { jest } from '@jest/globals'

it("TypeError: Cannot assign to read only property 'sum' of object '[object Module]'", () => {
  jest.mock("./util.js", () => ({
    __esModule: true,
    sum: jest.fn().mockReturnValue(2),
  }));
  
  expect(sum(1, 2)).toBe(2);
})