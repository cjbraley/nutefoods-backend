'use strict';

/**
 * starter-set router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::starter-set.starter-set');
