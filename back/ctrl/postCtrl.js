import { getAllPostsDal, createPostDal } from "../DAL/CRUD.js";

export async function getAllPosts(req, res) {
    try {
        const result = await getAllPostsDal()
        res.json("post exsist: ", result)
    } catch (error) {
        res.json("CTRL Error: post isn't exsist");
    }
}

export async function createPost(req, res) {
    try {
        const { discrption, owner } = req.body
        const post = {
            id: Date.now(),
            img: "htpp//localhost:3000/images/logo.jpg",
            discrption: discrption,
            likes: 0,
            owner: owner,
            date: new Date().toLocaleString()
        }
        try {
            await createPostDal(post)
            res.json("post created successfully: ", post)
        } catch (error) {
            res.json("CTRL Error: fild to create new post:", error)
        }
        
    } catch (error) {
        res.json("CTRL Error: error receiving data from the client",error)
    }
}
