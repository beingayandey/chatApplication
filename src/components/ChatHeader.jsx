import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";

const ChatHeader = ({ onToggleDrawer }) => {
  return (
    <Box sx={{ flexGrow: 1 }} className="chat-header">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={onToggleDrawer} // 💡 Toggle sidebar on click
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ChatApp
          </Typography>
          <Link to="/login" color="inherit">
            Login
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ChatHeader;
