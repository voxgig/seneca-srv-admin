/* Copyright © 2019 voxgig ltd. CONFIDENTIAL AND PROPRIETARY. */
'use strict'

const Optioner = require('optioner')
const Joi = Optioner.Joi

module.exports = {
  print: false,
  test: true,
  log: false,
  file: './data.js',
  pattern: 'role:admin',
  calls: [
    {
      pattern: 'hook:register',
      params: { service: { package: require('../package.json') } }
    },
    {
      pattern: 'get:service',
      params: { name: '@seneca/srv-admin' },
      out: { package: {} }
    },
    {
      pattern: 'list:service',
      params: {},
      out: { items: [{ package: {} }] }
    }
  ]
}
