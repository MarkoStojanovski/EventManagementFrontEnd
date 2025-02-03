import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"


function Sponsor({sponsors}) {
    return (
        <Grid container spacing={4}>
          {sponsors.map((sponsor) => (
            <Grid item xs={12} sm={6} md={4} key={sponsor.id}>
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
                  image={sponsor.imageUrl} 
                  alt="Sponsor Logo"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="h2" gutterBottom>
                    {sponsor.name} 
                  </Typography>
                  
                  <Typography variant="body2" color="textSecondary">
                    <strong>Email:</strong> {sponsor.email}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Sponsored from:</strong> {sponsor.moneyGivenDate}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Status:</strong> {sponsor.sponsorStatus}
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

export default Sponsor
