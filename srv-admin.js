/* Copyright (c) 2019 voxgig and other contributors, MIT License */
'use strict'


module.exports = service_admin
module.exports.defaults = {}


function service_admin(options) {
  const seneca = this
  const Joi = seneca.util.Joi
  
  const servicemap = {}
  
  seneca
    .message('role:admin,hook:register', hook_register)
    .message('role:admin,get:service', get_service)
    .message('role:admin,list:service', list_service)

  async function hook_register(msg) {
    const service = msg.service
    servicemap[service.package.name] = service
  }

  async function get_service(msg) {
    return servicemap[msg.name]
  }

  async function list_service(msg) {
    var names = Object.keys(servicemap)
    var srvdescs = names.map(sn => {
      var sv = servicemap[sn].package.version
      return {name:sn, version:sv}
    })
    return {items:srvdescs}
  }


  Object.assign(hook_register, {
    desc: 'Register a service description. Typically used during the plugin init phase.',
    examples: {
      'service:{package:<package>}': 'Provide service description.',
    },
    validate: {
      service: Joi.object()
        .required()
        .description(
          'Service description object.'
        )
    }
  })

  Object.assign(get_service, {
    desc: 'Get service description.',
    examples: {
      'name:foo': 'Describe service `foo`.'
    },
    validate: {
      name: Joi.string()
        .required()
        .description(
          'The name of the service.'
        )
    },
    reply_desc: {
      package: 'Service package'
    }
  })

  Object.assign(list_service, {
    desc: 'List registered services.',
    reply_desc: {
      items: 'Array of service descriptions.'
    }
  })
}

