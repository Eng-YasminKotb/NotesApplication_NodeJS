var pool= require('./pool')


//promise

exports.query=pool.query(queryText, queryParams)
 .then(res=>{

 })
 .catch(e=>{

 })


 exports.query=(queryText,queryParams)=>{
    return new Pramise((resolve,reject)=>{
        pool.query(queryText,queryParams)
        
        .then(res=>{
            resolve(res);
        })  
        
        .catch(err => {
            reject(err);
        })
    })

 }