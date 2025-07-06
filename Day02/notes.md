Variable : Variables are used to store data by giving a name to it.

#Syntax -> Specifier StorageName = Value;

#Specifiers -> Controller of the storage , Where and who can access this storage.

1. var
   Function Scoped, can be redeclared(not recommended)
2. let
   Block Scoped, can be reassingned
3. const
   Block Scoped, **CANNOT** be reassigned or redeclared

<!-- Type of Values -->

1. Primitives (string, number, boolean, null, undefined, symbol, bigint):
   Stored by value.
   Assignment copies the actual value.
   After copying, the variables are independent:

Example:
let a = "car";
let b = a; // b = "car"
a = "bike";
console.log(b); // "car" (unchanged)

2. Non-primitives (objects, arrays, functions):
   Stored by reference.
   Assignment copies the reference, not the actual object.
   After copying, both variables point to the same underlying object
   Example:
   let x = { type: "fruit" };
   let y = x;
   x.type = "vegetable";
   console.log(y.type); // "vegetable" (changed)

<!-- Variable naming convention -->

1. use camelCase
2. use meaningful names

<!-- PRIMITIVE DataTypes -->

**Stored in Stack Memory**

    -"String" -> Text Values ("Hello")
    -Number -> Numeric Values (25,3.14)
    -Boolean -> TRUE or FALSE
    -Null -> Represents NOTHING (let y = null;)
    -Undefined -> Represents UNASSIGNED (let x; console.log(x);)
    -Symbol -> Unique and immutable primitive values
    -BigInt -> Whole numbers in JavaScript (let bigInt = 12345678901234567890n;)

<!-- NON PRIMITIVE Datatypes -->

**Stored in Heap Memory**

    - Object -> Collection of key value pairs
    - Array -> ordered list of values
    - Function -> Code that can be reused multiple times

<!-- HOW JS SEES CODE? -->

Whenever js engine sees any line of code, It takes the line of code through 3 stages:

1. Tokenizing
   Breaking your code into small pieces called tokens.
2. Parsing
   Taking all those tokens and building a tree-like structure called an Abstract Syntax Tree (AST).
3. Interpreting
   Going through that tree step by step and executing instructions OR compiling them into machine code to run faster.
