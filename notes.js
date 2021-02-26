const fs = require('fs');
const chalk= require('chalk');

const addnote = (title,body) => {
    const notes = loadnotes();
    const duplicatenodes =  notes.find((note) => {return note.title === title})

    debugger
    if(!duplicatenodes){
        notes.push({
            title: title,
            body: body
        })
        savenotes(notes)
    }
    else{
        console.log("node title taken!")
    }
   
}

const savenotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

const loadnotes = () => {
  try{
    const databuff = fs.readFileSync('notes.json')
    const datajson = databuff.toString();
    return JSON.parse(datajson);
  }catch(e){
    return []
  }
}

const removenote = (title) => {
   const notes = loadnotes();
   const notestokeep = notes.filter((note) => {return note.title !== title})
  
   if(notes.length > notestokeep.length){
        console.log(chalk.green('Success!!'));
   }
   else{
     console.log(chalk.red('not done anything!'))
   }

   savenotes(notestokeep); 
}

const listnotes = () =>{
  const tobeshown = loadnotes();
  console.log(chalk.green("here are your notes!!"))
  tobeshown.forEach(ele => {
      console.log(ele);
  });
}

const readnotes = (title) =>{
    const allnotes = loadnotes();

    const findnote = allnotes.find((ele) => {
      return ele.title === title
    })

    if(findnote){
       console.log(chalk.green.inverse(findnote.title))
       console.log(chalk.blueBright(findnote.body))
    }else{
       console.log(chalk.red.inverse("Note not found!!"))
    }
}

module.exports = {
        addnote: addnote,
        removenote: removenote,
        listnotes : listnotes,
        readnotes : readnotes
}