import fs from "fs/promises";


export async function getAllPostsDal() {
    try {
        const data = await fs.readFile('data/posts.txt', 'utf-8');
        console.log('File content:', data);
        return data
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

export async function createPostDal() {
    try {
        

    } catch (error) {

    }
}


