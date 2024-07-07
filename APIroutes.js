const router=require("express") .Router()

const{readFromFile, readAndAppend} =require("../helpers/fsUtils")
const uuid=require ("../helpers/uuid")

router.get("/", (req,res)=>{
readFromFile("./db/db.json") .then(data=>res.json(JSON.parse(data)))
})

router.post("/",(req,res)=>{

const{title,text}=req.body
if(title&&text){
    const newNote={
title,text,id:uuid()
    }
    readAndAppend(newNote,"./db/db.json")
    res.json(newNote)
    

} else{
    res.json("error posting notes")
}
})
module.exports=router