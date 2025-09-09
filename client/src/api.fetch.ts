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

