var expect = require("expect");
var { isRealString } = require("./validation");

describe("isRealString", () => {
  it("should reject non-string values", () => {
    var isRealStringTest = isRealString(99);

    expect(isRealStringTest).toBe(false);
  });
  it("should reject string with only spaces", () => {
    var justSpaces = "    ";
    var isRealStringTest = isRealString(justSpaces);

    expect(isRealStringTest).toBe(false);
  });
  it("should allow strings with non-space characters", () => {
    var validRoomName = "       Node Chat Room   ";
    var isRealStringTest = isRealString(validRoomName);

    expect(isRealStringTest).toBe(true);
  });
});
