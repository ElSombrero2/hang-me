import { IRules } from "../../interfaces/rules.interface";
import { VariablesRegex } from "../../regex/regex";

export class DefaultRule implements IRules {
  public regex: RegExp = VariablesRegex;

  canApply(expr: string): boolean {
    return this.regex.test(expr);
  }

  apply(key: string, object: any): string {
    return object[key];
  }
}
