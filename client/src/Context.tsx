import { createContext } from "react"


export type User = {
    name: string,
    password: string,
    token: string
}
export type userContextType = {
    user: User | null,
    setUser: | React.Dispatch<React.SetStateAction<User | null>>
}
export const userContext = createContext<userContextType>({
    user: { name: "", password: "", token: "" },
    setUser: () => { }
})