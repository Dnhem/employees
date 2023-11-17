import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBarItems = [
  { to: "/", icon: <HomeIcon />, text: "Home" },
  { to: "/employees", icon: <PersonIcon />, text: "Employees" },
  { to: "/addemployee", icon: <PersonAddAlt1Icon />, text: "Add Employee" },
  { to: "/deleted", icon: <PersonOffIcon />, text: "Former Employees" },
];

const NavbarLinks = () => {
  return (
    <Box sx={{ overflow: "auto" }}>
      {NavBarItems.map((item) => (
        <List key={item.to}>
          <Link to={item.to} className="plain-link">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      ))}
    </Box>
  );
};

export default NavbarLinks;
