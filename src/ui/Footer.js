import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        py: 2,
        textAlign: "center",
        position: "fixed",
        width: "100%",
        left: 0,
        bottom: 0,
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} EventOrganizer. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
