import { useContext } from 'react'; 
import Button from './Button';
import Header from './Header';
import ThemeContext from '../Context/ThemeContext';
import Profile from './Profile';


function Container() {
    const {theme} = useContext(ThemeContext)
  return (
    <div className={`app ${theme}`}>
        <Button/>
        <Header/>
        <Profile></Profile>
    </div>
  )
}

export default Container