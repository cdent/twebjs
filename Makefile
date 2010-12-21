
.PHONY: test

test: teststore
	node test/runner.js

teststore:
	twinstance teststore
	(cd teststore && twanager bag test < /dev/null)

clean:
	rm -r teststore
