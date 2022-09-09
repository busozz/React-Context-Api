import './App.css';
import {ThemeProvider} from './Context/ThemeContext';
import Container from './Component/Container';
import { UserProvider } from './Context/UserContext';

function App() {
  return (
    <div className="App">
      
      <ThemeProvider>
        <UserProvider>
          <Container/>
        </UserProvider>
      </ThemeProvider>

    </div>
  );
}

export default App;
