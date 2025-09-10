import { createUser, getAllUsers, getUserByID } from "../DAL/UserCRUD.js"
import { generateToken, hashPassword, verifyPassword } from "../utils/auth.js"



export async function register(req, res) {
    const result = await getAllUsers()
    try {
        const { name, password } = req.body
        const hash = await hashPassword(password, 10)//הצפנת הסיסמה שלו
        const user = {
            userId: result.length + 1,
            name: name,
            password: hash
        }
        try {
            if (user.name && user.password) {
                await createUser(user)
                res.json(`user created successfully: Remember your ID number: ${user.userId}`)
            }
            else {
                res.json("missing username or password")
            }
        } catch (error) {
            res.json("CTRL Error: fild to create new user:", error)
        }

    } catch (error) {
        res.json("CTRL Error: error receiving data from the client", error)
    }
}

export async function login(req, res) {
    try {
        const { userId, name, password } = req.body
        const user = await getUserByID(userId)
        if (!user) {
            return res.status(401).json({ error: "user not exsist" })
        }

        const isPasseord = await verifyPassword(password, user.password)
        if (!isPasseord) {
            return res.status(401).json({ error: "unconfirmed password" })
        }//אימות הסיסמה שלו

        const token = await generateToken(user);//יצירת טוקן בשביל המשתמש
        res
            .header("Authorization", `Bearer ${token}`)
            .status(201)
            .json({
                message: "Login successful",
                token: token,
                user: {
                    id: userId,
                    name: name
                }
            })
    } catch (error) {
        res.status(500).json({ error: "Server return error during login" });
    }
}