import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Cards() {

  const navigate = useNavigate()

  return (
    <>
      <Grid container spacing={4} sx={{ mt: 3 }}>
        <Grid item xs={12} sm={6} md={6}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: 4,
              boxShadow: 3,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 6,
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                fontWeight="bold"
                textAlign={"center"}
                gutterBottom
              >
                Categories
              </Typography>
              <Typography color="textSecondary">
                Whether you're seeking excitement, adrenaline or entertainment,
                we have events tailored just for you.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={()=> {
                navigate("/categories")
              }}>Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: 4,
              boxShadow: 3,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 6,
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                fontWeight="bold"
                textAlign={"center"}
                gutterBottom
              >
                Unforgettable Events
              </Typography>
              <Typography color="textSecondary">
                Explore our curated selection of events tailored to inspire,
                entertain, and bring people together.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={()=>
                navigate("/events")
              }>Explore</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: 4,
              boxShadow: 3,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 6,
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                fontWeight="bold"
                textAlign={"center"}
                gutterBottom
              >
                Unlock Your Adventure with Tickets
              </Typography>
              <Typography color="textSecondary">
                Get ready for an unforgettable experience—secure your tickets
                now and be part of the excitement!
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={()=> {
                navigate("/tickets")
              }}>Get Started</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: 4,
              boxShadow: 3,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 6,
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                fontWeight="bold"
                textAlign={"center"}
                gutterBottom
              >
                Share Your Feedback
              </Typography>
              <Typography color="textSecondary">
                We value your voice! Let us know your thoughts and experiences
                to help us make every event even better.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={()=>{
                navigate("/feedbacks")
              }}>Get Started</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Cards;
