// import { type PostProps } from "./components/application-layout/Post";

export async function getAllPost() {
    try {
        const response = await fetch("http://localhost:4010/linkKodeKode/getAllPosts", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json()
        console.log(data);
        return data
    } catch (error) {
        console.log(error);
        return null
    }
}

export async function createNewPost(owner:string,discrption:string) {
    try {
        const response = await fetch("http://localhost:4010/linkKodeKode/createPost", {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({owner,discrption})
        })
        const data = await response.json()
        console.log(data);
        return data
    } catch (error) {
        console.log(error);
        return null
    }
}

export async function getPostById(id:number) {
    try {
        const response = await fetch(`http://localhost:4010/linkKodeKode/getPost/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);
        return null
    }
}