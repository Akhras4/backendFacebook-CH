const { Router } = require("express");
const DoThis=require("../controller/functions")
const router=Router()


router.get("/", DoThis.MainPage);
router.get("/feed",DoThis.MainPage );
router.post("/feed", DoThis.CreatFeed);

router.get("/feed/:id",DoThis.GetFeedId );
router.post("/feed/delete/:id",DoThis.DeleteFeedId);


router.get("/feed/edit/:id", DoThis.EditFeedId);
router.post("/feed/edit/:id", DoThis.EditFeedId);






module.exports=router