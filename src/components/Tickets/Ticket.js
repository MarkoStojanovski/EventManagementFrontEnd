import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

function Ticket({ tickets }) {
  return (
    <Grid container spacing={4}>
      {tickets.map((ticket) => (
        <Grid item xs={12} sm={6} md={4} key={ticket.id}>
          <Card 
            sx={{ 
              display: "flex", 
              flexDirection: "column", 
              height: "100%", 
              borderRadius: 4, 
              boxShadow: 3, 
              transition: "transform 0.3s ease, box-shadow 0.3s ease", 
              "&:hover": { 
                transform: "scale(1.05)", 
                boxShadow: 6,
              },
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={`${process.env.PUBLIC_URL}/${ticket.event.imageUrl}`} 
              alt={ticket.event.title}
              sx={{ borderRadius: "4px 4px 0 0" }} 
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography 
                variant="h6" 
                component="h2" 
                gutterBottom
                sx={{ fontWeight: "bold", color: "primary.main" }}
              >
                {ticket.event.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" paragraph>
                <strong>Event Time:</strong>  {new Date(ticket.event.eventDateTime).toLocaleString()}
              </Typography>
              <Typography variant="body2" color="textSecondary" paragraph>
                <strong>Ticket Price:</strong> {ticket.price} €
              </Typography>
              <Typography variant="body2" color="textSecondary" paragraph>
                <strong>Event Category:</strong> {ticket.event.category}
              </Typography>
              <Typography variant="body2" color="textSecondary" paragraph>
                <strong>Ticket Type:</strong> {ticket.ticketType}
              </Typography>
            </CardContent>
            <Box sx={{ p: 2 }}>
              <Button 
                variant="contained" 
                color="primary" 
                fullWidth 
                sx={{ 
                  "&:hover": { backgroundColor: "primary.dark" },
                  boxShadow: "none", 
                  textTransform: "none",
                }}
              >
                View Details
              </Button>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Ticket;
