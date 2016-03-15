# PatEL

The Patrisika Example Language.

## Install

``` sh
npm install patel
```

## Syntax

PatEL's syntax is based on Lisp's S-expression but with two significant changes:

* Supports infix operators, like `(1 + 2)`.
* Use indents to avoid too-deep nests.

There are three fundamental constructions in PatEL:

- Invocation: `[a b c]`
- Infix: `(x + y)`
- Struct: `{a b c}` and `{.a 1 .b 2}`

For invocations you can replace `[a b [c d [e f g]]]` with `[a b : c d : e f g]` to eliminate deep nests.

Invocations and Infixes can be written in line-level like this:

``` 
f2 a b c : x y z
    d e f
    g h i
    j + k
```

This is identical to the form `[f2 a b c [x y z [d e f] [g h i] [j + k]]]`, but much clearer.

## Semantics

- **[if *test* *consequent* *alternate*]**
  Evaluate *test*, then when it is true, evaluate and return *consequent*, otherwise evaluate and return *alternate*.
- **[if *test* *consequent*]** 
  Evaluate *test*, then when it is true, evaluate and return *consequent*, otherwise return `nothing`.
- **[while *test* *body*]**
  Assign temporary variable *t* to `nothing`.
  Evaluate *test*, then when it is true, evaluate *body* and set *t* to the value of *body*, then loop; otherwise return *t*.
- **[return *e*]**
  Evaluate *e*, and immediately return the current function valued *e*.
- **[throw *e*]**
  Evaluate *e*, and throw an exception valued *e*.
- **[yield *e*]**
  Mark the current function as Generator Function.
  Evaluate and yield *e*.
- **[foreach [*e* *range*] *body*]**
  Enumerate items in *range* using standard ES6 semantics, assign the current item to *e* and evaluate *body*.
- **[define *e* *value*]**
  Define a local constant *e* and set its value to *value*.
- **[local *e* *value*]**
  Define a local variable *e* and set its value to *value*.
- **[local *x*]**
  Declare a local variable *x* and set it to *nothing*.
- **[define [*f* *a* *b* *c*] *body*]**
  Define a local constant *f*, and set it to a function takes parameters *a*, *b* and *c*, and returns *body*.
- **[local [*f* *a* *b* *c*] *body*]**
  Define a local variable *f*, and set it to a function takes parameters *a*, *b* and *c*, and returns *body*.
- **[define *pattern* *value*]**
  Assign *value* to *pattern*, and declare all variables occurred in *pattern* as local constant. Function call patterns are not supported here. Function call patterns are not directly supported here, but can be used as sub-pattern.
- **[local *pattern* *value*]**
  Assign *value* to *pattern*, and declare all variables occurred in *pattern* as local variable. Function call patterns are not directly supported here, but can be used as sub-pattern.
- **[lambda [*a* *b* *c*] *body*]**
  Returns a function which takes parameters *a*, *b* and *c*, and returns *body*.
- **[set *e* *value*]**: Set term *e* (a variable, a property)'s value to *value*.
- **[begin *a* *b* ... *z*]**: Evaluate *a*, *b*, ..., *z* in order and return *z*'s value.

