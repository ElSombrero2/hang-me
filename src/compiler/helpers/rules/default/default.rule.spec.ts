import { DefaultRule } from "./default.rule";

describe('DefaultRule', () => {
  const rule = new DefaultRule();

  describe('Regex test', () => {
    it('should returns true if a simple variable is passed', () => {
      const expr = 'name';

      expect(rule.canApply(expr)).toBeTruthy();
    })

    it('should returns true if an array is passed', () => {
      const expr = 'name[0]';

      expect(rule.canApply(expr)).toBeTruthy();
    })

    it('should returns true if a complex object and array is passed', () => {
      const expr = 'user[0].rules[0].name.test[3]';

      expect(rule.canApply(expr)).toBeTruthy();
    })
  })

  it('should return the value of the object with the passed key', () => {
    const key = 'key';
    const obj = {key: 'value'};

    expect(rule.apply(key, obj)).toEqual('value');
  })
})