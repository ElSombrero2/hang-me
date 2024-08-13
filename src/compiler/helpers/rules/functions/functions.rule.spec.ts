import { FunctionsRule } from "./functions.rule";

describe("FunctionsRule", () => {
  const rule = new FunctionsRule();

  describe("Regex test", () => {
    it("should returns true if function is passed", () => {
      const expr = "getName: name";

      expect(rule.canApply(expr)).toBeTruthy();
    });

    it("should returns true if function with many parameters is passed", () => {
      const expr = "getInfo: name lastname age";

      expect(rule.canApply(expr)).toBeTruthy();
    });
  });

  it("should returns the result of the function passed in parameters", () => {
    const expr = "getInfo: name lastname age";
    const getInfo = jest.fn().mockReturnValue("John Doe 25");

    expect(
      rule.apply(expr, {
        name: "John",
        lastname: "Doe",
        age: 25,
        getInfo,
      })
    ).toEqual("John Doe 25");
    expect(getInfo).toHaveBeenCalledWith("John", "Doe", 25);
  });
});
