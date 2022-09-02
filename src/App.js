import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import AuthContextProvider from "./context/AuthContextProvider";
// components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Account from "./pages/Account";
import ProtectedRoute from "./pages/ProtectedRoute";
// context
import CartContextProvider from "./context/CartContextProvider";
import DetailsMovie from "./pages/DetailsMovie";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e50914",
    },
    secondary: {
      main: "#fefefe",
    },
  },
});

function App() {
  return (
    <div style={{ background: "black", minHeight: "100vh" }}>
      <AuthContextProvider>
        <CartContextProvider>
          <ThemeProvider theme={theme}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/details/:id" element={<DetailsMovie />} />
              <Route
                path="/account"
                element={
                  <ProtectedRoute>
                    <Account />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </ThemeProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
