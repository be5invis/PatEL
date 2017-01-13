PATEL = node bin/patel-c

all: src/externs.js src/ex.js src/syntax.js src/essential-macros.json

src/externs.js : src/externs.patel
	$(PATEL) $< -o $@ --strict --optimize
src/ex.js : src/ex.patel
	$(PATEL) $< -o $@ --strict --optimize
src/essential-macros.json : src/essential-macros.patel
	$(PATEL) $< --dump-ast -o $@