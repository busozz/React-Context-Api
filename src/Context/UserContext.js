import { useState } from "react";
import { createContext } from "react";

const UserContext = createContext()


export const UserProvider = ({children})=>{
    
    const [user,setUser] = useState({
        id:1,
        name:"Busöz",
        bio:"lorem ipsum dolor"
    }
)

    const values = {user,setUser}
    return <UserContext.Provider value={values} >{children}</UserContext.Provider>
}


export default UserContext