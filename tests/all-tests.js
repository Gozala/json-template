exports.testSimple = require("./testSimple");
exports.testSubstitutions = require("./testSubstitutions");
if (require.main === module.id)
    require("os").exit(require("test/runner").run(exports));

