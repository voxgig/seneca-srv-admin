/* Copyright (c) 2019 voxgig and other contributors, MIT License */
'use strict'

const Util = require('util')
const Fs = require('fs')

const Lab = require('lab')
const Code = require('code')
const lab = (exports.lab = Lab.script())
const expect = Code.expect

const SenecaMsgTest = require('seneca-msg-test')
const PluginValidator = require('seneca-plugin-validator')
const Seneca = require('seneca')
const Plugin = require('..')

lab.test(
  'validate',
  Util.promisify(function(x, fin) {
    PluginValidator(Plugin, module)(fin)
  })
)

lab.test('happy', async () => {
  return await seneca_instance().ready()
})


lab.test(
  'organization-messages',
  Util.promisify((err, fin) => {
    SenecaMsgTest(seneca_instance(), require('./msg-spec.js'))(fin)
  })
)



function seneca_instance(config, plugin_options) {
  return Seneca(config, { legacy: { transport: false } })
    .test()
    .use('promisify')
    .use(Plugin, plugin_options)
}
