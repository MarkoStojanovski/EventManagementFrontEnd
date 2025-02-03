import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material"

function Feedback({ feedbacks }) {
  return (
    <Grid container spacing={4}>
      {feedbacks.map((feedback) => (
        <Grid item xs={12} sm={6} md={4} key={feedback.id}>
          <Card sx={{ display: "flex", flexDirection: "column", height: "100%", borderRadius: 4, boxShadow: 3, transition: "transform 0.3s ease, box-shadow 0.3s ease", "&:hover": { transform: "scale(1.05)", boxShadow: 6 } }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" component="h2" gutterBottom>
               <strong>Feedback by</strong> {feedback.user.name + ' ' + feedback.user.surname}
              </Typography>
              <Typography variant="body2" color="textSecondary" paragraph>
                <strong>Rating:</strong> {feedback.rating} / 5
              </Typography>
              <Typography variant="body2" color="textSecondary" paragraph>
                <strong>Comment:</strong> {feedback.comment.length > 150 ? `${feedback.comment.substring(0, 150)}...` : feedback.comment}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <strong>Submitted At:</strong> {new Date(feedback.createdAt).toLocaleString()}
              </Typography>
            </CardContent>
            <Box sx={{ p: 2 }}>
              <Button variant="contained" color="primary" fullWidth>
                View Event Details
              </Button>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default Feedback
