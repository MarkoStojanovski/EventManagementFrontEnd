import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"

function Location({locations}) {
    return (
        <Grid container spacing={4}>
          {locations.map((location) => (
            <Grid item xs={12} sm={6} md={4} key={location.id}>
              <Card sx={{ display: "flex", 
                flexDirection: "column",
                 height: "100%",
                 borderRadius: 4,
                 boxShadow: 3,
                 transition: "transform 0.3s ease, box-shadow 0.3s ease",
                 "&:hover": {
                 transform: "scale(1.05)",
                 boxShadow: 6,
              },
                 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={location.imageUrl} 
                  alt="Location Photo"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="h2" gutterBottom>
                    {location.name} {location.country} 
                  </Typography>
                  
                  <Typography variant="body2" color="textSecondary">
                    <strong>City:</strong> {location.city}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Address:</strong> {location.address}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Active Since:</strong> {new Date(location.activeSince).toLocaleDateString()}
                  </Typography>
                </CardContent>
                <Box sx={{ p: 2 }}>
                  <Button variant="contained" color="primary" fullWidth>
                    View Details
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
    )
}

export default Location
