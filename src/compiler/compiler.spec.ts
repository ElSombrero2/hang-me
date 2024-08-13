import { Text, MockFunctions, SourceObject, TextResult } from "../__mock__/mock";
import { Compiler } from "./compiler"

describe('Compiler', () => {
  const compiler = new Compiler();

  it('should compile the values and interpolate the object', () => {
    expect(compiler.compile(Text, {
      ...SourceObject,
      ...MockFunctions,
    })).toEqual(TextResult);
  })
})