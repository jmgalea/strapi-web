'use strict';

/**
 * new-test controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::new-test.new-test');
