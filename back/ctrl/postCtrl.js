import { getAllPostsDal } from "../DAL/CRUD.js";

export async function getAllPosts(req,res) {
    try {
        const result = await getAllPostsDal()
        console.log("post exsist");
        res.json(result)
    } catch (error) {
        console.log("post isn't exsist");
    }
}
