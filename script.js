//your code here
class OutOfRangeError extends Error {
  constructor() {
    super("Expression should only consist of integers and +-/* characters");
    this.name = this.constructor.name;
  }
}

class InvalidExprError extends Error {
  constructor() {
    super("Expression should not have an invalid combination of expressions");
    this.name = this.constructor.name;
  }
}
