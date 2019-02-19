# @seneca/srv-admin

[![Npm][BadgeNpm]][Npm]
[![Travis][BadgeTravis]][Travis]
[![Coveralls][BadgeCoveralls]][Coveralls]


Documentation helper for [Seneca](senecajs.org) plugins.


## Install

```sh
$ npm install @seneca/srv-admin -D
```

```js
seneca.use('srv-admin')
```



<!--START:action-list-->


## Action Patterns

* [get:service,role:admin](#-getserviceroleadmin-)
* [hook:register,role:admin](#-hookregisterroleadmin-)
* [list:service,role:admin](#-listserviceroleadmin-)


<!--END:action-list-->

<!--START:action-desc-->


## Action Descriptions

### &laquo; `get:service,role:admin` &raquo;

Get service description.




#### Examples



* `get:service,role:admin,name:foo`
  * Describe service `foo`.
#### Parameters


* _name_: string <i><small>{presence:required}</small></i>
  * The name of the service.




#### Replies With


```
{
  package: 'Service package'
}
```


----------
### &laquo; `hook:register,role:admin` &raquo;

Register a service description. Typically used during the plugin init phase.




#### Examples



* `hook:register,role:admin,service:{package:<package>}`
  * Provide service description.
#### Parameters


* _service_: object <i><small>{presence:required}</small></i>
  * Service description object.


----------
### &laquo; `list:service,role:admin` &raquo;

List registered services.





#### Replies With


```
{
  items: 'Array of service descriptions.'
}
```


----------


<!--END:action-desc-->


[BadgeCoveralls]: https://coveralls.io/repos/voxgig/@seneca/srv-admin/badge.svg?branch=master&service=github
[BadgeNpm]: https://badge.fury.io/js/@seneca/srv-admin.svg
[BadgeTravis]: https://travis-ci.org/voxgig/@seneca/srv-admin.svg?branch=master
[Coveralls]: https://coveralls.io/github/voxgig/@seneca/srv-admin?branch=master
[Npm]: https://www.npmjs.com/package/@seneca/srv-admin
[Travis]: https://travis-ci.org/voxgig/@seneca/srv-admin?branch=master
