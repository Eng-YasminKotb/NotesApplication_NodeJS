var express = require('express');
var router =express.Router() ;
var noteCtrl=require('../controller/noteController')


router.get("/notes",noteCtrl.getAllNotes)
router.put("/notes/save",noteCtrl.saveNotes)
router.post("/notes/update",noteCtrl.UpdateNotes)
router.delete("/notes/delete/:noteId",noteCtrl.deleteNotes)

module.exports=router