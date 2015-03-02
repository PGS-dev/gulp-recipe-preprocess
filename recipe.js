'use strict';

/**
 * Preprocess index source files
 *
 */
module.exports = function ($, config, sources) {
    return {
        pipes: {
            /**
             * @hooks pipe.preDevBuild*
             * @hooks pipe.preBuild*
             */
            preDevBuild: [config.preprocess.order, $.lazypipe().pipe($.preprocess, config.preprocess.dev)],
            preBuild: [config.preprocess.order, $.lazypipe().pipe($.preprocess, config.preprocess.prod)]
        }
    }
};