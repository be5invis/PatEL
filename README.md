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

This is identical to the form `[f2 a b c [x y z [d e f] [g h i] (j + k)]]`, but much clearer.

## Primitive Semantics

- **[if *test* *consequent* *alternate*]**
  Evaluate *test*, then when it is true, evaluate and return *consequent*, otherwise evaluate and return *alternate*.
- **[if *test* *consequent*]** 
  Evaluate *test*, then when it is true, evaluate and return *consequent*, otherwise return `nothing`.
- **[piecewise [*condition1* *consequent1*] \[*condition2* *consequent2*] ...]**
  Evaluate *condition1*, when it is true, evaluate and return *consequent1*; otherwise, evaluate the rest condition-consequent pairs in the same manner. When all conditions are all false, return `nothing`.
- **[match *term* [*pattern1* *consequent1*] \[*pattern2* *consequent2*] ... ]**
  Evaluate *term*, and test whether it matches *pattern1*. When it matches, extract the parts mentioned in the pattern, evaluate and return *consequent1*. Otherwise, evaluate the rest pattern-consequent pairs in the same manner. When all patterns mismatch, return `nothing`.

  Sample:
  ```
  define [sum list] : match list
      {} 0                               # empty
      {head :: rear} : head + [sum rear] # cons
      otherwise : throw : new Error "Input is not a list." # everything else
  ```

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

  Sample:
  ```
  define [endless] : begin
      local x 0
      while true : begin
          yield x
          set x : x + 1

  define g : endless
  console.log [g.next].value # 0
  console.log [g.next].value # 1
  ```


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
- **[set *pattern* *value*]**: Set *pattern* value to *value*. Function call patterns are not directly supported here, but can be used as sub-pattern.
- **[begin *a* *b* ... *z*]**: Evaluate *a*, *b*, ..., *z* in order and return *z*'s value.