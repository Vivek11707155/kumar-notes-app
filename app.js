const notes = require('./notes');
const yargs = require('yargs');


//create command of add
yargs.command({
    command: 'add',
    describe: 'Add new Notes',
    builder: {// to add some more properties into the add command e.g TITLE, BODY
        title:{
            describe:'Note title',
            demandOption: true,// checks title is required
            type: 'string'
        } ,
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {// shorthand function
        notes.addNote(argv.title , argv.body);
    }
    
})
// remove command
yargs.command({
    command: 'remove',
    describe: 'Remove notes',
    buidler: {
        title: {
            describe:'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: "Read a note",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title); 
    }
})

yargs.command({
    command: 'list',
    describe: 'lists of all note',
    handler(argv) {
        notes.listNotes();
    }
})



//add , remove , read , list

yargs.parse();// parse the args over from the command line and makes them useful in commands that user provided