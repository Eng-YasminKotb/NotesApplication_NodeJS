const { pool }= require('pg')
const dotev =require('dotenv')


const db_Config = {
    ConnectionString: process.env.DATABASE_URL,
    connectionTimeoutMillis: 300,

    idleTimeoutMillis: 200,
   
    max: 20

  }


const pool =new Pool(db_config)

pool.on('connect',client=>{
   console.log("database is connect");
})

pool.on('remove',client=>{
    console.log("database connection removed");
})
module.exports=pool;
