import express from "express";
import { createPost, getAllPosts ,getPostById} from "../ctrl/postCtrl.js";
import { authenticateUser } from "../middleWare/authenticateUser.js";


const router = express.Router()


router.get("/getAllPosts",authenticateUser(),getAllPosts)
router.get("/getPost/:id",getPostById)
router.post("/createPost",authenticateUser(),createPost)

export default router