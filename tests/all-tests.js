exports["test - json-template"] = require("./json-template-tests");
if (require.main === module.id)
    require("os").exit(require("test/runner").run(exports));

