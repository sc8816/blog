const {eslint, deepmerge} = require('@ice/spec');

module.exports = deepmerge(eslint, {
    rules: {
        "global-require": 0,
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn"
    },
});
