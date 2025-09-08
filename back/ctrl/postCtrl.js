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
    const result = await getAllPostsDal()
    try {
        const { discrption, owner } = req.body
        const post = {
            id: result.length + 1,
            img: `htpp//localhost:3000/images/${id}.jpg`,
            discrption: discrption,
            likes: 0,
            owner: owner,
            date: new Date().toLocaleString()
        }
        try {
            if (post.owner !== undefined && post.discrption !== undefined) {
                await createPostDal(post)
                res.json("post created successfully: ", post.owner)
            }
            else {
                res.json("insert all part of post")
            }
        } catch (error) {
            res.json("CTRL Error: fild to create new post:", error)
        }

    } catch (error) {
        res.json("CTRL Error: error receiving data from the client", error)
    }
}
