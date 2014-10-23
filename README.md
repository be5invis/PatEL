PatEL
=====

The Patrisika Example Language.

Install
-------

    npm install patel

Semantics
---------

- `[.if ,test ,consequent ,alternate]` Branching
- `[.if ,test ,consequent]` Identical to `[.if ,test ,consequent [.unit]]`