const { sum } = require(".");

describe("index", () => {
  describe("sum", () => {
    it("adds two numbers", () => {
      expect(sum(2, 2)).toBe(4);
      expect(sum(2, 3)).toBe(5);
    });
  });
});
