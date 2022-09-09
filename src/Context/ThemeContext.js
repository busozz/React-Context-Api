import { createContext , useState,useEffect} from "react";      // datasını kullanmak istediğim componentte createContext ile oluşturuyoruz.


const ThemeContext = createContext()



export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState("dark")

    useEffect(()=>{
        localStorage.setItem("theme",theme)
    },[theme])

    const values = {
        theme,
        setTheme,
    }

    return  <ThemeContext.Provider value={values}>
                {children}
            </ThemeContext.Provider>
}

export default ThemeContext