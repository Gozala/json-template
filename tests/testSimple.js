var Template = require("../json-template").Template

exports["test - Simple example"] = function(assert) {
    assert.equal(Template('Hello {name}').expand({'name': 'world'}),
                 "Hello world", 'simple')
}
exports.testComment = function(assert) {
    var t = Template("Hello {# Comment} There")
    assert.equal(t.expand({}), "Hello  There", 'comment')
};
exports.testSpace = function(assert) {
    var t = Template('{.space}{.space}')
    assert.equal(t.expand({}), '  ', 'space')
};
exports.testWhitespace = function(assert) {
    var t = Template('{.tab}{.tab}')
    assert.equal(t.expand({}), '\t\t', 'whitespace')
};
exports.testLinebreak = function(assert) {
    var t = Template('Line{.newline}')
    assert.equal(t.expand({}), 'Line\n', 'line')
};
exports.testOnlyDeclaration = function(assert) {
    var t = Template('{# Comment}')
    assert.equal(t.expand({}), '', 'declaration')
};

if (module == require.main)
  require('test').run(exports)
