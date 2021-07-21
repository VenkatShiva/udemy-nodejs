const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes');

// create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// create remove command
yargs.command({
  command: 'remove',
  describe: 'Removing new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
    // console.log('Removing note here');
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
    console.log('Reading a note here');
  },
});

yargs.parse();
// console.log();
