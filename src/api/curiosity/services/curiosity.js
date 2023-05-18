'use strict';

/**
 * curiosity service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::curiosity.curiosity');
