const pool = require("./db");

const sql = 'UPDATE "PrelimExam"."AB_supplier" SET supp_add = $1 WHERE supp_id = 1 RETURNING *';
const data = ['Indangan'];

pool.query(sql,data,(err,res)=>{
    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows[0]);
    }
});