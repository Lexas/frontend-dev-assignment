

jshint-files = CURDIR/src/js/*.js

css-dir = CURDIR/css
styles-dir = $(frontend)/styles

JSHINT = jshint
STYLUS = stylus

build:
	$(STYLUS) $(styles-dir) --include-css -o $(css-dir) -U
	jshint $(jshint-files) -r
	duo src/js/*.js 
set:
	bower-installer
deps:
	sudo npm install -g bower-installer
	sudo npm install -g duo
	sudo npm install -g jshint

.PHONY: deps set build


