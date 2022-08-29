import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { ThemeProvider,createTheme } from '@mui/material';

const theme = createTheme({
  palette:{
    primary:{
      main: "#e50914"
    },
    secondary: {
      main: "#fefefe"
    }
  }
})


function App() {
  return (
    <div style={{background: 'black',minHeight: '100vh'}}>
      <ThemeProvider theme={theme}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
