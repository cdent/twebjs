var suites = {
    "sample"   : {
        cases: require("./sample").tests
    },
    "tiddlywiki" : {
        cases: require('./tiddlywiki').tests
    },
    "tiddler" : {
        cases: require('./tiddler').tests
    },
};

require("mjsunit.runner/runner").run(suites);
