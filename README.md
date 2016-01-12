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

- **[if *test* *consequent* *alternate* ]** : Branching.
- **[if *test* *consequent* ]** : Branching without alternative branch.
- **[while *test* *body*]** : Loop.
- **[return *e*]**: Immediate return.
- **[yield *e*]**: Mark the current function as Generator Function and yield *e*.
- **[foreach [*e* *range*] *body*]**: Enumerate items in *range*, assign it to *e* and evaluate *body*.
- **[define *e* *value*]**: Define a local variable *e* and set its value to *value*.
- **[local *e* *value*]**: Define a local variable *e* and set its value to *value*.
- **[define [*f* *a* *b* *c*] *body*]**: Define a local function *f*, with parameters *a*, *b* and *c*, to *body*.
- **[local [*f* *a* *b* *c*] *body*]**: Define a local function *f*, with parameters *a*, *b* and *c*, to *body*.
- **[local *x*]**: Declare a local variable *x* and set it to *nothing*.
- **[set *e* *value*]**: Set term *e* (a variable or a property)'s value to *value*.
- **[begin *a*, *b*, ..., *z*]**: Evaluate *a*, *b*, ..., *z* in order and return *z*'s value.

