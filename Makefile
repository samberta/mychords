export PATH := ${HOME}/.deno/bin:${PATH}

.PHONY: all
all: setup build

.PHONY: build
build: clean
	deno run -A npm:prettier --check .
	deno lint
	cp -r src/. public
	rm -rf public/js
	deno run -A npm:esbuild src/main.js src/main.css src/worker.js \
		--bundle --minify --outdir=public --platform=neutral

.PHONY: clean
clean:
	rm -rf public

.PHONY: format
format:
	deno run -A npm:prettier --write .

.PHONY: run
run:
	deno run -A npm:esbuild \
		--servedir=src \
		--serve=127.0.0.1:8080 \
		--serve-fallback=src/index.html

.PHONY: serve
serve: build
	deno run -A npm:esbuild \
		--servedir=public \
		--serve=127.0.0.1:8080 \
		--serve-fallback=public/index.html

.PHONY: setup
setup:
	rm -rf node_modules
	git config core.hookspath hooks
	deno -v || curl -fsSL https://deno.land/install.sh | sh
	deno cache npm:prettier src/js/deps.js
