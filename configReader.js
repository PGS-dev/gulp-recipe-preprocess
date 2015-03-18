'use strict';

module.exports = function ($, config) {
    config.sources = undefined;
    return $.lodash.merge({
        order: {
            preprocess: 10
        },
        preprocess: {
            dev: {context: {target: 'dev'}},
            dist: {context: {target: 'dist'}}
        }
    }, config);
};