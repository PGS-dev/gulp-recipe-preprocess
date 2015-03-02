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
            preDevBuild: [config.order.preprocess, $.lazypipe().pipe($.preprocess, config.preprocess.dev)],
            preBuild: [config.order.preprocess, $.lazypipe().pipe($.preprocess, config.preprocess.prod)]
        }
    }
};