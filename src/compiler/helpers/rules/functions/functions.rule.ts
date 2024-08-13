import { IRules } from "../../interfaces/rules.interface";
import { FunctionsRegex } from "../../regex/regex";

export class FunctionsRule implements IRules {
  regex: RegExp = FunctionsRegex;

  canApply(expr: string): boolean {
    return this.regex.test(expr);
  }
  apply(expr: string, object: any): string {
    const [functionName, rawArgs] = expr.split(": ");

    const args = rawArgs.split(" ").reduce((array, key) => {
      object[key] && array.push(object[key]);
      return array;
    }, [] as any[]);

    return object[functionName].apply(undefined, args);
  }
}
