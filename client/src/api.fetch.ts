import type { userContextType } from "./Context";


export async function getAllPost(user: userContextType) {
    try {
        const response = await fetch("http://localhost:4010/linkKodeKode/getAllPosts", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${user.user?.token}`
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        return null
    }
}

export async function createNewPost(owner: string, discrption: string, user: userContextType) {
    try {
        const response = await fetch("http://localhost:4010/linkKodeKode/createPost", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${user.user?.token}`
            },
            body: JSON.stringify({ owner, discrption })
        })
        const data = await response.json()
        return data
    } catch (error) {
        return null
    }
}

export async function getPostById(id: string | undefined) {
    try {
        const response = await fetch(`http://localhost:4010/linkKodeKode/getPost/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }

        })
        const data = await response.json()
        return data
    } catch (error) {
        return null
    }
}

export async function register(name: string, password: string) {
    const response = await fetch("http://localhost:4010/linkKodeKode/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, password })
    })
    if (!response.ok) {
        const error = await response.json();
        return error;
    }
    const data = await response.json();
    return data
}

export async function login(name: string, password: string, userId: string) {

    const response = await fetch("http://localhost:4010/linkKodeKode/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",


        },
        body: JSON.stringify({ name, password, userId })
    })

    if (!response.ok) {
        const error = await response.json();
        console.log(error);
        return null;
    }
    const data = await response.json()
    return data
}