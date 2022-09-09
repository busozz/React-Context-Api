import {useContext} from 'react'          // datanın kullanılacak olan componentte useContext ile kullnıyoruz.

import ThemeContext from "../Context/ThemeContext"

function Button() {

    const {theme,setTheme} = useContext(ThemeContext)

    console.log(theme);

  return (
    <div>
        
    Active Theme : {theme}
    
    <br /><br /><br />
    

    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>Change Button</button>


    <br /><br />
    <hr />
    </div>
  )
}

export default Button