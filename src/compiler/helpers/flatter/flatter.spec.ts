import { FlattedSourceObject, SourceObject } from "../../../__mock__/mock";
import { Flatter } from "./flatter"

describe('Flatter', () => {
  const flatter = new Flatter();

  it('should flat an object and keep the original array', () => {
    const result = flatter.flat(SourceObject);
    expect(result).toEqual(FlattedSourceObject);
  })
})