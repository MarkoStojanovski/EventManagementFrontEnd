import React from "react";
import { Box, Grid, Card, CardMedia } from "@mui/material";

const PhotosHomePage = ({ images }) => {
  
  return (
    <Box sx={{ mt: 8 }}>
      <Grid container spacing={3}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 6,
                },
                height: "100%", 
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={image}
                alt={`Photo ${index + 1}`}
                sx={{
                  borderRadius: 2,
                  objectFit: "cover", 
                  height: "100%", 
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PhotosHomePage;
