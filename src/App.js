import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Text from "./components/text";
import AboutUs from "./components/AboutUs";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("dark");

  const handleMode = (mode) => {
    setTheme(mode);
  };
  return (
    <>
      <Navbar handleMode={handleMode} theme={theme}></Navbar>
      <div className={`content-${theme}`}>
        <Container>
          <Box sx={{ height: "100vh" }}>
            <Outlet />
          </Box>
        </Container>
      </div>
    </>
  );
}

export default App;
