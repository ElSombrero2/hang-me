import { Text, SourceObject, MockFunctions } from "./__mock__/mock";
import { Compiler } from "./compiler/compiler";

export function main() {
  console.time("Compiler test");
  const compiler = new Compiler();
  console.log(compiler.compile(Text, {
    ...SourceObject,
    ...MockFunctions,
  }));
  console.timeEnd("Compiler test");
}
