import React, { useState, useContext, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { Paper, MenuItem } from "@mui/material";
import authContext from "../../store/auth-context";
import { Navigate, NavLink, useLocation, useNavigate } from "react-router-dom";

const loginNavigationMenus = [{ id: "m1", name: "내 정보", href: "/mypage" }];

const logoutNavigationMenus = [
  { id: "m1", name: "로그인", href: "/users/login" },
  { id: "m2", name: "회원가입", href: "/users/signup" },
];

export default function ButtonAppBar() {
  const [visible, setVisible] = useState(false);
  const ctx = useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const openDrawer = () => {
    setVisible(true);
    console.log("clicked");
  };

  console.log(visible);

  useEffect(() => {
    setVisible(false);
  }, [location.pathname]);

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={openDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontFamily: "Gowun Dodum" }}
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            >
              책 검색 서비스
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer anchor="left" open={visible} onClose={() => setVisible(false)}>
        {ctx.isLoggedIn
          ? loginNavigationMenus.map((menu) => (
              <MenuItem key={menu.id}>
                <NavLink to={menu.href}>{menu.name}</NavLink>
              </MenuItem>
            ))
          : logoutNavigationMenus.map((menu) => (
              <MenuItem key={menu.id} sx={{ width: 200 }}>
                <NavLink to={menu.href} style={{ width: "100%" }}>
                  {menu.name}
                </NavLink>
              </MenuItem>
            ))}
      </Drawer>
    </React.Fragment>
  );
}
