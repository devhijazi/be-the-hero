const idGenerator = require("../../src/utils/idGenerator");

describe("Generate Unique ID", () => {
  it("should generate an unique ID", () => {
    const id = idGenerator();

    expect(id).toHaveLength(8);
  });
});
