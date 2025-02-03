import { Typography } from "@mui/material";

function Header() {
  return (
    <div >
      <Typography id="home-page" variant="h4" align="center" fontWeight="bold" gutterBottom>
        Our Features
      </Typography>
      <Typography variant="body1" align="center" color="textSecondary">
        Explore our amazing and unforgettable events and make perfect memories
        with us
      </Typography>
    </div>
  );
}

export default Header;
