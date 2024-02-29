import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import AdbIcon from "@mui/icons-material/Adb";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Outlet, Link } from "react-router-dom";

import "../App.css";

function Navbar({ handleMode, theme }) {
  const pages = ["Products", "Pricing", "Blog"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className={`box-${theme}`}>
          <Toolbar disableGutters>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Text Utils
            </Typography>
            <Link to={`/aboutUs`}>About Us</Link>
            {/* <Link to={`contacts/2`}>Text1</Link> */}

            <Button
              size="small"
              color="inherit"
              style={{ backgroundColor: "black", margin: "5px" }}
              onClick={() => handleMode("dark")}
              className="darkMode-button"
            >
              Dark
            </Button>
            <Button
              size="small"
              color="inherit"
              style={{
                backgroundColor: "white",
                margin: "5px",
                color: "black",
              }}
              className="lightMode-button"
              onClick={() => handleMode("light")}
            >
              Light
            </Button>
            <Button
              size="small"
              color="inherit"
              style={{ backgroundColor: "Blue", margin: "5px" }}
              onClick={() => handleMode("blue")}
              className="blueMode-button"
            >
              Blue
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
