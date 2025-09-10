import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { config } from 'dotenv';
config()



export async function hashPassword(password,salt) {
    let hash;
    try {
        hash = await bcrypt.hash(password, salt)
    } catch (error) {
        console.log({ msg: "cannt hashPassword ", error });
    }
    return hash;
}

export async function verifyPassword(password, hash) {
    try {
        const status = await bcrypt.compare(password, hash)
        if (!status) {
            return false
        }
        return true
    } catch (error) {
        console.log(error);
        return null
    }
}

export async function generateToken(user) {
    try {
        const token =  jwt.sign(
            {
                name: user.name
            },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        )
        return token
    } catch (error) {
        console.log(error);
        return null
    }

}

export async function  verifyToken(token) {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    } catch (error) {
        return null;
    }
}