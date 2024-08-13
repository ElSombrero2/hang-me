## Getting Started

It's a simple zero dependencies template string compiler for Typescript and typescript.

## Basic Usage

```typescript
import { Compiler } from "./compiler/compiler";

const template = "My name is: {{name}}!";
const compiler = new Compiler();

const result = compiler.compile(template, {
  name: 'John Doe'
});

console.log(result); // my name is: John Doe!
```

## Object and array

You can get values directly from embed object

```typescript

const template = "Hello, I am {{user.firstname}}  {{user.lastname}}!";
const compiler = new Compiler();

const result = compiler.compile(template, {
  user: {
    firstname: 'John',
    lastname: 'Doe'
  }
});

console.log(result); // Hello, I am John Doe!
```

Or you can get value from array

```typescript
import { Compiler } from "./compiler/compiler";

const template = "Hello, I am {{user.info[0]}}  {{user.info[1]}}!";
const compiler = new Compiler();

const result = compiler.compile(template, {
  user: {
    info: [
      'John',
      'Doe'
    ]
  }
});

console.log(result); // Hello, I am John Doe!
```

## Functions

You can also call a function inside your template by using this syntax

```typescript
import { Compiler } from "./compiler/compiler";

const template = "Hello, I am {{fullnameUpperCase: firstname lastname}}!";
const compiler = new Compiler();

const result = compiler.compile(template, {
  firstname: 'John',
  lastname: 'Doe',
  fullnameUpperCase: (firstname: string, lastname: string) => {
    return `${firstname} ${lastname}`.toUpperCase();
  }
});

console.log(result); // Hello, I am JOHN DOE!
```

### Enjoy 🫡