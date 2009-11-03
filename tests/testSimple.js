var assert = require("test/assert"),
    Template = require("json-template").Template;

exports["test - Simple example"] = function() {
    assert.isEqual(Template('Hello {name}').expand({'name': 'world'}), "Hello world");
};
exports.testComment = function() {
    var t = Template("Hello {# Comment} There");
    assert.isEqual(t.expand({}), "Hello  There");
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

