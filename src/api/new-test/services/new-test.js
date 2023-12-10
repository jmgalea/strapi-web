'use strict';

/**
 * new-test service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::new-test.new-test');
