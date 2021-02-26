const chalk = require('chalk')
const { string, argv } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')
const Notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => Notes.addnote(argv.title, argv.body)
})
 
// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title :{
            describe: 'note',
            demandOption : true,
            type : 'string'
        }
    },
    handler: (argv) => notes.removenote(argv.title)
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: (argv) =>  {
        notes.listnotes()
    }
})
// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption : true,
            type: 'string'
        }
    }, 
    handler: (argv) => {
        notes.readnotes(argv.title)
    }
})

yargs.parse()