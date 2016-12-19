# 1010macro-external-dev-template
Template to get started using an external development environment for '1010 macro'.  

##Requirements:
* [Nodejs](http://nodejs.org/)
* [Grunt](http://gruntjs.com/)

## Getting Started


Install the [Nodejs](http://nodejs.org/) modules used by the project:
```js
    npm install
```    


If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins.

Install the grunt command line interface (globally):
```js
    npm install -g grunt-cli
```    


## Grunt task examples:
 
#### Serve task
Can be used to automate file changes. 

* Starts a 'connect' http webserver locally ([http://localhost:8081/](http://localhost:8081/)) (see 'tasks/configure.connect.js') ,
* Watches for file changes (see 'tasks/configure.watch.js) and runs configured tasks.
* Notifies 'LiveReload' browser plugin to refresh page (see 'tasks/configure.connect.js').  Also, see [livereload.com](http://livereload.com) for more info.

To run:
```
    grunt serve
```    

#### Upload task
Uploads quickapp files using the 'tendo:upload' task.   See the 'upload' node in 'tasks/configure.tendo.js'. 

To run:
```
    grunt upload
```

#### Query task
Uploads query files using the 'tendo:query' task.   See the 'query' node in 'tasks/configure.tendo.js'. 

To run:
```
    grunt query
```

#### Inline Query task
Executes a query string using the 'tendo:inline_query' task.   See the 'inline_query' node in 'tasks/configure.tendo.js'. 

To run:
```
    grunt inline_query
```

