'use strict';

/**
 * starter-set service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::starter-set.starter-set');
