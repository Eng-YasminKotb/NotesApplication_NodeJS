 //Require memorystorage module
 var memstorage=require('memorystorage')

 //generan an object from it 
 var store =new memstorage('non-app')

  exports.getKeys=(store)=>{
    var keys =[];
    for(var i=0;i<store.length;i++){
        var key =store.key(i);
        keys.push(key)
    }
    return keys;
  }


  exports.getValues=(store)=>{
    var values =[];
    for(var i=0;i<store.length;i++){
        var key =store.key(i);
        var value= store.getItem(key);
        values.push(value);
    }
    return values;
  }



 //export your module
 exports.store=store;