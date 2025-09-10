import { getAllPostsDal, createPostDal } from "../DAL/PostCRUD.js";

export async function getAllPosts(req, res) {
    try {
        const result = await getAllPostsDal()
        res.json(result)
    } catch (error) {
        res.json("CTRL Error: post isn't exsist");
    }
}

export async function getPostById(req, res) {
    try {
        const result = await getAllPostsDal()
        let post;
        for (let i = 0; i < result.length; i++) {
            if (result[i].id == req.params.id){
                post = result[i]
                res.json(post)
            }
        }
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
            img: `htpp//localhost:3000/images/${result.length + 1}.png`,
            discrption: discrption,
            likes: 0,
            owner: owner,
            date: new Date().toLocaleString()
        }
        try {
            if (post.owner !== undefined && post.discrption !== undefined) {
                if (result.length >= 0 && result.length <= 5) {
                    await createPostDal(post)
                    res.json("post created successfully ")
                }
                else {
                    res.json("We are unable to add another post.")
                }
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
