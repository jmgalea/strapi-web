'use strict';

/**
 * new-test router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::new-test.new-test');
