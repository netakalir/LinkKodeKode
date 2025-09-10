import fs from "fs/promises";


export async function createUser(newUser) {
    try {
        let users = [];
        const data = await fs.readFile('data/users.txt', 'utf-8');
        users = data ? JSON.parse(data) : [];

        users.push(newUser);

        await fs.writeFile('data/users.txt', JSON.stringify(users, null, 2), 'utf-8');

        return newUser;
    } catch (error) {
        console.error("DAL Error: fild to creat new user: ", error);
        throw error;
    }
}


export async function getAllUsers() {
    try {
        const data = await fs.readFile('data/users.txt', 'utf-8');
        const res = JSON.parse(data)
        return res
    } catch (err) {
        console.error("DAL Error: Error reading file: ", err);
    }
}

export async function getUserByID(id) {
    const data = await fs.readFile('data/users.txt', 'utf-8');
    const res = JSON.parse(data)
    let user;
    for (let i = 0; i < res.length; i++){
        if (res[i].userId == id){
            user = res[i]
            return user
        }
        else{
            user = null
        }
    }
    return null
}