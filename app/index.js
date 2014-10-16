'use strict';
var util   = require('util')
var path   = require('path')
var yeoman = require('yeoman-generator')


module.exports = LibrarySkeletonGenerator

util.inherits(LibrarySkeletonGenerator, yeoman.generators.Base)
function LibrarySkeletonGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments)

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] })})

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')))
}

LibrarySkeletonGenerator.prototype.askFor = function askFor() {
  var cb = this.async()

  // have Yeoman greet the user.
  console.log(this.yeoman)

  var prompts = [{
    name: 'name',
    message: 'The name of the library'
  }, {
    name: 'description',
    message: 'What the library does?'
  }, {
    name: 'github',
    message: 'Your GitHub username'
  }, {
    name: 'user',
    message: 'Your name'
  }, {
    name: 'exports',
    message: 'The exported global for the library (for non-module platforms)'
  }]

  this.prompt(prompts, function (props) {
    this.pkg = { name        : props.name
               , description : props.description
               , github      : props.github
               , user        : props.user
               , exports     : props.exports }

    cb()
  }.bind(this))
}

LibrarySkeletonGenerator.prototype.library = function library() {
  this.mkdir('src')
  this.mkdir('test')
  this.mkdir('test/specs-src')
  this.mkdir('tools')

  this.template('_package.json', 'package.json')
  this.template('_jsdoc.conf.json', 'jsdoc.conf.json')
  this.template('_LICENCE', 'LICENCE')
  this.template('_CONTRIBUTING.md', 'CONTRIBUTING.md')
  this.template('_README.md', 'README.md')
  this.template('_run.js', 'test/run.js')
  this.template('_specs.sjs', 'test/specs-src/index.sjs')
  this.template('_index.js', 'src/index.sjs')

  this.copy('_Makefile', 'Makefile')
  this.copy('_.npmignore', '.npmignore')
  this.copy('_.hgignore', '.hgignore')
  this.copy('_.gitignore', '.gitignore')
  this.copy('_.travis.yml', '.travis.yml')
  this.copy('tools/bump-version.js', 'tools/bump-version.js')
}