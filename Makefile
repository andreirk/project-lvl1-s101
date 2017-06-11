
install:
	npm install

start-calc:
	npm run babel-node -- src/bin/brain-calc.js

start-even:
	npm run babel-node -- src/bin/brain-even.js

start-gcd:
	npm run babel-node -- src/bin/brain-gcd.js

publish:
	npm publish

lint:
	npm run eslint