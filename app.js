const notes = require('./notes');
const yargs = require('yargs');





// const command = process.argv[2];
// if(command === 'add'){
//     console.log(chalk.green('Adding note!'));
// } else if(command === 'remove'){
//     console.log(chalk.red('Removing notes!'));
// }
// console.log(process.argv);//prints the parsed data provided  from input  user


//customize yargs version
// yargs.version('1.1.0');

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
        // console.log("Title: "+ chalk.green(argv.title));// in argv our title is stored
        // console.log("Body: "+ chalk.green(argv.body));// in argv our body is stored
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
    describe: 'list your note',
    handler(argv) {
        notes.listNotes();
    }
})



//add , remove , read , list

yargs.parse();// parse the args over from the command line and makes them useful in commands that user provided