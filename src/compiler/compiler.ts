import { Flatter } from "./helpers/flatter/flatter";
import { Regex } from "./helpers/regex/regex";
import { DefaultRule } from "./helpers/rules/default/default.rule";
import { FunctionsRule } from "./helpers/rules/functions/functions.rule";

export class Compiler {
  private rules = [new FunctionsRule(), new DefaultRule()];

  private flatter: Flatter = new Flatter();

  public compile(str: string, obj: any) {
    const flatted = this.flatter.flat(obj);
    let result = str;
    for (let match of str.matchAll(Regex)) {
      const [expr, key] = match;
      const rule = this.rules.find((rule) => rule.canApply(expr));
      if (rule) {
        const sanitizedExpr = expr
          .replace(RegExp("\\[", "g"), "\\[")
          .replace(RegExp("\\]", "g"), "\\]");
        result = result.replace(
          RegExp(sanitizedExpr, "g"),
          rule.apply(key, flatted)
        );
      }
    }
    return result;
  }
}
