export interface IRules {
  regex: RegExp;
  canApply(expr: string): boolean;
  apply(key: string, object: any): string;
}
