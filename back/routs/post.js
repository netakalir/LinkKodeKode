import express from "express";
import { getAllPosts } from "../ctrl/postCtrl.js";


const router = express.Router()


router.get("/getAllPosts",getAllPosts)
// router.get("/getPost/:id",)
// router.post("/createPost",)
// router.put("/updatePost/:id",)
// router.delete("/deletePost/:id",)

export default router