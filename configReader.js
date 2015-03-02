'use strict';

module.exports = function ($, config) {
    var _ = $.lodash;
    return _.merge({
        preprocess: {
            order: 10,
            dev: {context: {target: 'dev'}},
            prod: {context: {target: 'prod'}}
        }
    })
};