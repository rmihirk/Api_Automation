var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('apiConfig.properties');
var supertest = require('supertest');

module.exports.baseURL = supertest.agent(properties.get('baseURL4core'));
