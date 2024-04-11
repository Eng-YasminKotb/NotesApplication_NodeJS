var pool= require('./pool')


//promise

exports.query=pool.query(queryText, queryParams)
 .then(res=>{

 })
 .catch(e=>{

 })