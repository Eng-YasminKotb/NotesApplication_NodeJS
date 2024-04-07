//Controller is used for business logic
//To export the following function
var generator=require('../Util/generator')
var memstorage=require('../Util/memory.storage')
var model=require('../model/note.model')

exports.getAllNotes= function(req,res) {
   /*  var sqlId_1=generator.generate();
    memsrorage.store.setItem(sqlId_1, "1st_key")
    var sqlId_2= generator.generate();
    memsrorage.store.setItem(sqlId_2, "2nd_key")

   var keys= memsrorage.getKeys(memsrorage.store);
   var values=memsrorage.getValues(memsrorage.store)
    console.log("values........."+JSON.stringify(values))
    
    var Note=model.Note;
    var noteObj=new Note(sqlId_1,"Best than yester day","keep going under any presure","Yasmin",new Date()); */
    res.send("get all notes By yasmina");


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
    res.send("Update notes.....");
}

exports.deleteNotes= function(req,res) {
    res.send("Delete notes.....");
}