var assert = require("test/assert"),
    Template = require("json-template/json-template").Template;

exports["test - sample"] = function() {
    var src = '<html xmlns="http://www.w3.org/1999/xhtml" xmlns:st="http://hyperstruct.net/seethrough#js">'
        + '<head><title st:content="site.title"/></head>'
        + '<body><h1>Welcome to <span st:replace="site.title"/>!</h1></body>'
        + '</html>';
    var data = {
        site: {
            title: 'FooBar'
        }
    };
    var result = '<html xmlns="http://www.w3.org/1999/xhtml" xmlns:st="http://hyperstruct.net/seethrough#js">'
            + '<head><title>FooBar</title></head>'
            + '<body><h1>Welcome to FooBar!</h1></body>'
            + '</html>';
    assert.isEqual(new Template(src).expand(data), result);
};

if (module.id == require.main)
    require('os').exit(require('test/runner').run(exports));

