<div>
    <h1>Some differences between interfaces and types in TypeScript: </h1>
    <p>
        In typescript, type and interface are used to define the shape of the data.  The common differences between type and interface are mentioned below:
    </p>
    <ol>
        <li>
            Using interface we cannot define primitive data types. Instead we have to use type aliasing for that. Objects can be defined using interface. An Example of interface is:
            ```ts:
            interface User { //allowd as interface accepts non-primitive types
                name: string;
                age: number;
            }

            interface Number {number} //is not allowed as interface doesn't allow primitive type
            type Number = number  //allowed as type accepts primitive type
            ```
        </li>

        <li>
            We can define unions and intersections using type. But interface doesn't provide this type of functionalities.
            Example:
            ```ts
                interface A {
                    a: string;
                    c: number;
                }

                interface B {
                    b: number;
                    c: number;
                }

                type AB1 = A & B; //this is allowed
                type AB2 = A | B; //this is allowed
                interface AB extends A & B {}  //this is error
            ```
        </li>


        <li>
            Interface Supports merging. But Types Doesn't Support them.
            Example:
            ```ts
                interface Person {
                    name: string;
                }

                interface Person {
                    age: number;
                }

                // Merged Person now has both `name` and `age`
                const p: Person = { name: "Alice", age: 30 };

                type Person = {
                    name: string;
                };

                type Person = {
                    age: number;
                }; // Error
            ```
        </li>
    </ol>
</div>
