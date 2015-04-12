

jshint-files = $(CURDIR)/js/*.js

css-dir = $(CURDIR)/css
styles-dir = $(CURDIR)/style

JSHINT = jshint
STYLUS = stylus

style:
	$(STYLUS) $(styles-dir) --include-css -o $(css-dir) -U -w
build:
	$(STYLUS) $(styles-dir) --include-css -o $(css-dir) -U
	jshint $(jshint-files)
	r.js -o build.js
set:
	bower-installer -r
deps:
	sudo npm install -g bower-installer
	sudo npm install -g rquirejs
	sudo npm install -g stylus
	sudo npm install -g jshint

.PHONY: deps set build style


