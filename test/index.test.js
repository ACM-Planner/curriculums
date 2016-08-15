'use strict'

const request = require('supertest')
const expect = require('chai').expect

const app = require('../server/app')
const curriculums = require('../index')


describe('load static files as library', function () {
  it('parses the json files', function () {
    const object = curriculums()
    expect(object).to.not.be.empty
  })
})

describe('loading express', function () {
  it('responds to /', function (done) {
    request(app)
      .get('/')
      .expect(200, done)
  })

  it('404 everything else', function (done) {
    request(app)
      .get('/foo/bar')
      .expect(404, done)
  })

  it('still working as gh-pages on the static directory', function (done) {
    request(app)
    .get('/static/pregrado/ingenieria/2009/civil-computacion.json')
    .expect('Content-Type', /json/)
    .expect(200, done)
  });

  it('returns the complete tree', function (done) {
    request(app)
      .get('/tree')
      .expect('Content-Type', /json/)
      .expect(200, done)
  });
})
