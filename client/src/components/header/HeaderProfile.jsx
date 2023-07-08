import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { auth } from "../firebase";

const settings = ["Profile", "Account", "Dashboard", "Logout"];
const HeaderProfile = () => {
  const { user, loading } = useSelector((state) => state.user);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(false);
  //   const [loading, setLoading] = React.useState(false);
  const handleCloseUserMenu = (event) => {
    setAnchorElUser(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.target);
  };
  const handleOptionClick = async (event) => {
    if (event.target.innerHTML == "Logout") {
      try {
        // setLoading(true);
        await auth.signOut();
        // setLoading(false);
      } catch (error) {
        console.log(error);
        // setLoading(false);
      }
    }
  };

  useEffect(() => {}, [user]);
  return (
    <div>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={(e) => handleOpenUserMenu(e)} sx={{ p: 0 }}>
            <Avatar
              alt="Remy Sharp"
              src={
                user
                  ? user.photo
                  : "https://ic-tt-lm.xhcdn.com/a/MGNlNDY1MjM0NjAxYTJkYjhlY2IxZjRlM2JmYTcxNGU/webp/000/013/260/avatar1.jpg.v1610468625"
              }
            />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "4px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          keepMounted
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography
                value={setting}
                onClick={handleOptionClick}
                textAlign="center"
              >
                {setting}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </div>
  );
};

export default HeaderProfile;
