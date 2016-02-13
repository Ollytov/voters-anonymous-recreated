'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://meanuser:meanpass@ds051625.mongolab.com:51625/voters-anonymous'
  },

  // Seed database on startup
  seedDB: true

};
