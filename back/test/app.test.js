import { hashPassword, verifyPassword, generateToken, verifyToken } from "../utils/auth.js"

import { describe, test } from "node:test"
import assert from "node:assert";

describe("testing hash password function",()=>{
    test("hash with string salt", async () => {
        const hash = await hashPassword("1234", 10);
        // bcrypt מחזירה מחרוזת מבולבלת, לכן יש לבדוק את הסוג ושהוא אינו זהה לסיסמה.
        assert.strictEqual(typeof hash, "string");
        assert.ok(hash.length > 0);//בדיקה אם הערך של האורך של ה סיסמה שחזרה הוא גדול מ0 מחזיר אמת או שקר
    });
})

describe("testing verify password function",()=>{
    test("",async ()=>{
        const hash = await hashPassword("1234", 10);
        assert.ok(verifyPassword("1234",hash),true)//בדיקה אם הערך של האורך של ה סיסמה שחזרה הוא גדול מ0 מחזיר אמת או שקר
    })
})
// describe("testing generate token function",()=>{
//     test("",()=>{
//         assert.strictEqual(generateToken())
//     })
// })
// describe("testing verify token function",()=>{
//     test("",()=>{
//         assert.strictEqual(verifyToken())
//     })
// })