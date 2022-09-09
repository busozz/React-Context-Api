import {useContext} from 'react'
import UserContext from '../Context/UserContext'



function Profile() {


    const handleLogin = () =>{
        
        setTimeout(()=>{
            setUser({id:1,name:"busöz",bio:"loremke"})
        },1500)
    }

    const {user,setUser} = useContext(UserContext)

  return (
    <div>
        
        <button onClick={handleLogin} ></button>
        <code>{JSON.stringify(user)}</code>

    </div>
  )
}

export default Profile