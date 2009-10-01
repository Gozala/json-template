var assert = require("test/assert"),
    Template = require("json-template/json-template").Template;

exports.testSimpleData = function() {
    assert.isEqual(Template("Hello {name}, how are you").expand({'name': 'Andy'}), "Hello Andy, how are you");
};
exports.testExpandingInteger = function() {
    assert.isEqual(Template("There are {num} ways to do it").expand({'num': 5}), "There are 5 ways to do it");
};
exports.testSpace = function() {
    var t = Template('{.space}{.space}');
    assert.isEqual(t.expand({}), '  ');
};
exports.testWhitespace = function() {
    var t = Template('{.tab}{.tab}');
    assert.isEqual(t.expand({}), '\t\t');
};
exports.testLinebreak = function() {
    var t = Template('Line{.newline}');
    assert.isEqual(t.expand({}), 'Line\n');
};
exports.testOnlyDeclaration = function() {
    var t = Template('{# Comment}');
    assert.isEqual(t.expand({}), '');
};

if (module.id == require.main)
    require('os').exit(require('test/runner').run(exports));

