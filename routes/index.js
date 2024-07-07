const router=require("express") .Router()
router.use("/notes",require("./APIroutes"))
module.exports=router