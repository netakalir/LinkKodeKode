import fs from "fs/promises";


export async function getAllPostsDal() {
    try {
        const data = await fs.readFile('data/posts.txt', 'utf-8');
        console.log('File content:', data);
        return data
    } catch (err) {
        console.error("DAL Error: Error reading file: ", err);
    }
}

export async function createPostDal(newPost) {
    try {
        let posts = [];
        const data = await fs.readFile('data/posts.txt', 'utf-8');
        posts = data ? JSON.parse(data) : [];

        posts.push(newPost);

        await fs.writeFile('data/posts.txt', JSON.stringify(posts, null, 2), 'utf-8');

        return newPost;
    } catch (error) {
        console.error("DAL Error: fild to creat new post: ", error);
        throw error;
    }
}


