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

const NavbarLinks = () => {
  return (
    <Box sx={{ overflow: "auto" }}>
      <Link to="/" className="plain-link">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </List>
      </Link>
      <Link to="/employees" className="plain-link">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Employees" />
            </ListItemButton>
          </ListItem>
        </List>
      </Link>
      <Link to="/addemployee" className="plain-link">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonAddAlt1Icon />
              </ListItemIcon>
              <ListItemText primary="Add Employee" />
            </ListItemButton>
          </ListItem>
        </List>
      </Link>
      <Link to="/deleted" className="plain-link">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonOffIcon />
              </ListItemIcon>
              <ListItemText primary="Former Employees" />
            </ListItemButton>
          </ListItem>
        </List>
      </Link>
    </Box>
  );
};

export default NavbarLinks;
