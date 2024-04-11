//Controller is used for business logic
//To export the following function
var generator=require('../Util/generator')
var memstorage=require('../Util/memory.storage')
var model=require('../model/note.model')
//Try
exports.getAllNotes= function(req,res) {
    /*var sqlId_1=generator.generate();
    memstorage.store.setItem(sqlId_1, "1st_key")
    var sqlId_2= generator.generate();
    memstorage.store.setItem(sqlId_2, "2nd_key")

   var keys= memstorage.getKeys(memstorage.store);*/
   var values=memstorage.getValues(memstorage.store);
   console.log("values........."+JSON.stringify(values));
    

    return res.status(200).send(JSON.stringify(values));


}


exports.saveNotes= function(req,res) {
    var sqlId_1=generator.generate();
    var Create_By="Yasmin Kotb";
    var Create_At=new Date();

    //req.body
    var title=req.body.title;
    var content=req.body.content;
    
    if(!title  || !content){
        return res.status(500).send({error: 'Title  Content shoud not be empty'})
    }
        var Note=model.Note;
        var noteObj=new Note(sqlId_1,title,content,Create_By,Create_At);
        memstorage.store.setItem(sqlId_1, noteObj);
        return res.status(201).send("Note is saved Successfully!");
    
}

exports.UpdateNotes= function(req,res) {
   var Create_By="Yasmin Kotb";
    var Create_At=new Date();

    //req.body
   
    var title=req.body.title;
    var content=req.body.content;
    var noteId=req.body.noteId;

    if(!noteId) {
        return res.status(500).send({error: 'NoteID shoud not be empty!'})
    }
    if(!title  || !content) {
        return res.status(500).send({error: 'Title or Content shoud not be empty'})
    }  
    

  var noteItem=memstorage.store.getItem(noteId)//getItem return null
    if(!noteItem) {
        return res.status(500).send({error: 'Failed to find note! Please check the Id of the note'})
    }

        var Note=model.Note;
        var noteObj=new Note(noteId,title,content,Create_By,Create_At);
        memstorage.store.setItem(noteId, noteObj);
       return res.status(200).send("Successfully note is updated!");
}

exports.deleteNotes= function(req,res) {
    //the following line express about the id that user will type
   var noteId=req.params.noteId;
    if(!noteId) {
        return res.status(500).send({error: 'missed the note id! Please, enter the id of the note which you intend to delete'});
    }

    var noteItem=memstorage.store.getItem(noteId);
    if(!noteItem) {
        return res.status(500).send({error: 'Can not delete unexisted note!'});
    }
    memstorage.store.removeItem(noteId);

   
   return res.status(200).send("note is deleted successfully");

}




///post -->update

///put -->save || add new note



