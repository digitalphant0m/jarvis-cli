#!/usr/bin/env node

let program = require('commander');
let Marvel = require('./marvel.js')

 
program
  .option('-r, --retrieve', 'Retrieve data')
  .parse(process.argv);
 
if (program.retrieve) {
console.log('success')
let marvel = new Marvel()
marvel.getData()

}
