import express from "express";
import { createPost, getAllPosts ,getPostById} from "../ctrl/postCtrl.js";


const router = express.Router()


router.get("/getAllPosts",getAllPosts)
router.get("/getPost/:id ",getPostById)
router.post("/createPost",createPost)
// router.put("/updatePost/:id",)
// router.delete("/deletePost/:id",)

export default router