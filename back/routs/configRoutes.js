import postRouter from "./post.js"

// configures all application routes
export default function (app) {
    app.use("/linkKodeKode", postRouter)
    

    app.use((req, res) => { // error if no matching route found
        res.status(404).json({ msg: "route not found || or methoed is'nt right" })
    })
}