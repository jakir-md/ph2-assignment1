# 1. Some differences between interfaces and types in TypeScript
In typescript, type and interface are used to define the shape of the data. Some common differences between type and interface are mentioned below:
#### a. Defining Primitive and Non-primitive Data types:
Using `interface` we cannot define primitive data types. Instead, we have to use `type` aliasing for that. Objects can be defined using `interface`.
```typescript
interface User { ✅ //allowed as `interface` accepts non-primitive types
    name: string;
    age: number;
}
interface Number {number} ❌ //is not allowed as `interface` doesn't allow primitive type
type Number = number  ✅ //allowed as `type` accepts the primitive type
```

#### b. Defining unions and intersections:
We can define unions and intersections using `type`. But `interface` doesn't provide these types of functionalities.
```typescript
interface A {
    a: string;
    c: number;
}

interface B {
    b: number;
    c: number;
}

type AB1 = A & B; ✅ //this is allowed
type AB2 = A | B; ✅ //this is allowed
interface AB extends A & B {}  ❌ //Error
```

#### c. Merging:
Interface Supports merging. But Types Don't Support.
```typescript
interface Person {
    name: string;
}

interface Person {
    age: number;
}

// Merged Person now has both `name` and `age`
const p: Person = { name: "Alice", age: 30 }; ✅ //Allowed

type Person = {
    name: string;
};

type Person = {  ❌ // Error => Duplication of Person type
    age: number;
};
```
# 5. Type Inference in Typescript:
Type `inference` is a feature in `TypeScript` where the compiler automatically determines the type of a variable, function return, or expression based on its usage, even when we don’t explicitly declare the type.
```typescript
let name = "Jihad"; // automatically inferred as string
let age = 40;       // automatically  inferred as number
let isActive = false; // automatically inferred as boolean

let name: string = "Kodu"; // this is explicitly provided

// for functions:
function sayHello(user: string) {
  return `Hello, ${user}`;
}

const message = sayHello("Bob"); // message inferred as string

```
#### Benefits of Type Inference:
1. Help to  write less code because we don’t need to annotate every type.
2. Improves readability as our code stays clean and focused on logic.3
3. TypeScript-powered editors still provide smart suggestions and error checking based on inferred types.
4. The compiler still enforces types behind the scenes.