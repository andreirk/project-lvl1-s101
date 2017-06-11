
install:
	npm install

start-calc:
	npm run babel-node -- src/bin/brain-calc.js

start-even:
	npm run babel-node -- src/bin/brain-even.js

start-gcd:
	npm run babel-node -- src/bin/brain-gcd.js

start-balance:
	npm run babel-node -- src/bin/brain-balance.js

start-progress:
	npm run babel-node -- src/bin/brain-progression.js

publish:
	npm publish

lint:
	npm run eslint