const chalk = require('chalk');
const yargs = require('yargs');

const getNotes = require('./notes');

// create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function () {
    console.log('Adding note here');
  },
});

// create remove command
yargs.command({
  command: 'remove',
  describe: 'Removing new note',
  handler: function () {
    console.log('Removing note here');
  },
});

// create list command
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: function () {
    console.log('Listing all notes here');
  },
});

// create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
    console.log('Reading note here');
  },
});

// console.log('process args', process.argv);
console.log(yargs.argv);
