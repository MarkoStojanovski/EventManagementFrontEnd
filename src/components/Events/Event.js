import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"

function Event({events}) {
    return (
        <Grid container spacing={4}>
          {events.map((event) => (
            <Grid item xs={12} sm={6} md={4} key={event.id}>
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
                  image={`${process.env.PUBLIC_URL}/${event.imageUrl}`} 
                  alt={event.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="h2" gutterBottom>
                    {event.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    {event.description.length > 150 ? `${event.description.substring(0, 150)}...` : event.description}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Category:</strong> {event.category}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Event Date:</strong> {new Date(event.eventDateTime).toLocaleString()}
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

export default Event
