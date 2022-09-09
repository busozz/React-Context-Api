import ThemeContext from "../Context/ThemeContext"

import {useContext} from 'react'



function Header() {

  const {theme,setTheme} = useContext(ThemeContext)
    
  return (
    <div>
        Active Theme : {theme}
    </div>
  )
}

export default Header