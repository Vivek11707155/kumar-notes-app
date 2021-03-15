const fs = require('fs');
const chalk = require('chalk'); 
const { Console } = require('console');


// add note funvtion
const addNote = (title,body) => {
    const notes = loadNotes();

    // filtering array for validation
    // checking duplicate title
    const duplicateTitle = notes.find( (note) =>  note.title === title);// it returns undefined 

    if(!duplicateTitle){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse("New note added"));
    } else {
        console.log(chalk.red.inverse("Title name taken !"));
    }
    
}

// remove note function
const removeNote = (title) => {
    const notes = loadNotes();

    //checks title which are not matched and keeps them in new array
    const foundNote = notes.filter( (note) => note.title !== title);

    if(notes.length>foundNote.length){
        console.log(chalk.green.inverse("Note removed"));
        saveNotes(foundNote);// new array saved and other items removed
    } else {
        console.log(chalk.red.inverse("Note not found"));
    }
    
}

//List of notes

const listNotes = () =>{
    const notes = loadNotes();
    console.log(chalk.green.inverse("Your Notes"));
    notes.forEach((note)=>{
        console.log(note.title);
    })
}


// Read a note

const readNotes = (title) =>{
    const notes = loadNotes();
    const noteReaded = notes.find((note)=> note.title === title);
    if(noteReaded){// if found 
        console.log(chalk.green.inverse(noteReaded.title));
        console.log(chalk.inverse(noteReaded.body));
    } else {// else not
        console.log(chalk.red.inverse("Note Not Found"));
    }
    

}


// saving all notes
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);//converts notes array into JSON data
    fs.writeFileSync('notes.json',dataJSON);//
}

// loading all notes
const loadNotes = () => {
    try {
        const bufferData = fs.readFileSync('notes.json');
        const dataJSON = bufferData.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];// checks if file is created or if file is empty then return empty array
    }
    
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}
