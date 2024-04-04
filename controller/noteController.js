//Controller is used for business logic
//To export the following function
var generator=require('../Util/generator')
var memsrorage=require('../Util/memory.storage')
var model=require('../model/note.model')

exports.getAllNotes= function(req,res) {
    var sqlId_1=generator.generate();
    memsrorage.store.setItem(sqlId_1, "1st_key")
    var sqlId_2= generator.generate();
    memsrorage.store.setItem(sqlId_2, "2nd_key")

   var keys= memsrorage.getKeys(memsrorage.store);
   var values=memsrorage.getValues(memsrorage.store)
    console.log("values........."+JSON.stringify(values))
    
    var Note=model.Note;
    var noteObj=new Note(sqlId_1,"Best than yester day","keep going under any presure","Yasmin",new Date());
    res.send("get all notes By yasmina-----keys---- "+ JSON.stringify(noteObj));


}


exports.saveNotes= function(req,res) {
    res.send("save notes.....");
}

exports.UpdateNotes= function(req,res) {
    res.send("Update notes.....");
}

exports.deleteNotes= function(req,res) {
    res.send("Delete notes.....");
}