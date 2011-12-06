var Template = require("../json-template").Template;

exports.testSimpleData = function(assert) {
    assert.equal(Template("Hello {name}, how are you").expand({'name': 'Andy'}),
                 "Hello Andy, how are you", 'simple data')
}

exports.testExpandingInteger = function(assert) {
    assert.equal(Template("There are {num} ways to do it").expand({'num': 5}),
                 "There are 5 ways to do it", 'expanding integer')
}

exports.testSpace = function(assert) {
    var t = Template('{.space}{.space}')
    assert.equal(t.expand({}), '  ', 'space')
}

exports.testWhitespace = function(assert) {
    var t = Template('{.tab}{.tab}')
    assert.equal(t.expand({}), '\t\t', 'tab')
}

exports.testLinebreak = function(assert) {
    var t = Template('Line{.newline}')
    assert.equal(t.expand({}), 'Line\n', 'linebreak')
}

exports.testOnlyDeclaration = function(assert) {
    var t = Template('{# Comment}')
    assert.equal(t.expand({}), '', 'comment')
}

if (module == require.main)
  require('test').run(exports)
