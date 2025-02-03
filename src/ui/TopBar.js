import { AppBar, Tabs, Toolbar, Tab, Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function TopBar() {
  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurame] = useState("");
  const [value, setValue] = useState(0); 

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const name = localStorage.getItem("userName");
    const surname = localStorage.getItem("userSurname");
    if (name && surname) {
      setUserName(name);
      setUserSurame(surname);
    }
  }, []);

  useEffect(() => {
    switch (location.pathname) {
      case '/categories':
        setValue(2);
        break;
      case '/events':
        setValue(3);
        break;
      case '/locations':
        setValue(4);
        break;
      case '/feedbacks':
        setValue(5);
        break;
      case '/sponsors':
        setValue(6);
        break;
      case '/tickets':
        setValue(7);
        break;  
      case '/':
      case '/home':
      default:
        setValue(0);
    }
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userSurname");
    setUserName(null);
    setUserSurame(null);
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  
    if (newValue === 0) {
      if (location.pathname === "/home" || location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/home");
      }
    } else if (newValue === 1) {
      if (location.pathname === "/home" || location.pathname === '/') {
        const targetSection = document.getElementById("about-us");
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      } else {
        navigate("/home", { state: { scrollToAboutUs: true } });
      }
    } else if (newValue === 2) {
      navigate("/categories");
    } else if (newValue === 3) {
      navigate("/events");
    } else if (newValue === 4) {
      navigate("/locations");
    } else if (newValue === 5) {
      navigate("/feedbacks");
    } else if (newValue === 6) {
      navigate("/sponsors");
    }
    else if (newValue === 7) {
      navigate("/tickets");
    }
  };

  return (
    <AppBar position="fixed" color="inherit" sx={{ backgroundColor: "#f5f5f5", boxShadow: 1 }}>
      <Toolbar sx={{ minHeight: 48, paddingLeft: 2, paddingRight: 2 }}>
        <Tabs
          value={value}
          onChange={handleTabChange}
          variant="fullWidth"
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab label="Home" />
          <Tab label="About Us" />
          <Tab label="Categories" />
          <Tab label="Events" />
          <Tab label="Locations" />
          <Tab label="Feedbacks" />
          <Tab label="Sponsors" />
          <Tab label="Tickets" />
        </Tabs>
        <Box ml="auto" sx={{ display: "flex", alignItems: "center" }}>
          {userName ? (
            <>
              <Typography variant="body1" sx={{ marginRight: 2 }}>
                Welcome, {userName} {userSurname}
              </Typography>
              <Button color="primary" variant="contained" onClick={handleLogout}>
                Log Out
              </Button>
            </>
          ) : (
            <Button color="primary" variant="contained" onClick={() => navigate("/login")}>
              Sign In
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
