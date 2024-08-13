export class Flatter {
  private stack = [];

  public flat(object: unknown): unknown {
    this.stack.push({ current: object, key: null });
    const result: any = {};
    do {
      const { current, key } = this.stack.pop();
      if (Array.isArray(current)) {
        result[key] = current;
        Object.keys(current).forEach((k) =>
          this.getCurrentNode(current[k], `${key}[${k}]`, result)
        );
      } else {
        Object.keys(current).forEach((k) =>
          this.getCurrentNode(current[k], (key ? `${key}.` : "") + k, result)
        );
      }
    } while (this.stack.length);
    return result;
  }

  private getCurrentNode(current: unknown, key: string, result: unknown) {
    if (typeof current === "object") {
      this.stack.push({ current, key });
    } else {
      result[key] = current;
    }
  }
}
