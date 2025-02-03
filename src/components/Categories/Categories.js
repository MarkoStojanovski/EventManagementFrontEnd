import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';
import TopBar from '../../ui/TopBar';
import Footer from '../../ui/Footer';
import { useNavigate } from 'react-router-dom';
import useStyles from '../../hooks/useStyles';



const categories = [
  { name: 'Boxing', description: 'Step into the ring where power meets precision! Experience the thrill of two warriors going head-to-head, throwing lightning-fast punches, dodging with expert footwork, and battling for glory.', image: '/boxHP.jpg' },
  { name: 'Kick_Boxing', description: 'Unleash the ultimate fusion of power and agility! Kickboxing brings together lightning-fast punches, devastating kicks, and unstoppable momentum in a high-energy battle of skill and endurance. Whether in the ring or training for the fight of your life, every move is an explosion of strength and strategy. Are you ready to strike?', image: '/kickboxHP.jpg' },
  { name: 'Concerts', description: 'Feel the pulse of the crowd, the electrifying energy in the air, and the heart-pounding beats that shake the stage! Concerts are more than just music—they are a once-in-a-lifetime experience where passion, rhythm, and excitement collide. Get lost in the sound, sing at the top of your lungs, and be part of something unforgettable!', image: '/concertHP.jpg' },
  { name: 'Stand-Up Comedy', description: "Get ready for an unforgettable night of laughter! Stand-up comedy brings you sharp wit, hilarious stories, and unexpected punchlines that will have you in stitches. Feel the energy of live humor, where every joke lands with a roar of laughter. It's not just a show—it's a comedy experience you won’t want to miss!", image: '/comedyHP.jpg' },
  { name: 'Football', description: "Feel the adrenaline rush as two teams of 11 battle it out on the pitch, showcasing skill, speed, and strategy! Every pass, every tackle, and every goal brings electrifying excitement. Whether it's a last-minute winner or a stunning display of teamwork, football is more than a game—it's pure passion!", image: '/footballHP.jpg' },
  { name: 'Basketball', description: "Experience the fast-paced thrill of basketball, where two teams of five go head-to-head in a high-energy showdown! From jaw-dropping dunks to buzzer-beating three-pointers, every moment is packed with intensity and excitement. Get ready for non-stop action, teamwork, and unforgettable highlights!", image: '/basketballHP.jpg' },
];

function Categories() {
  const classes = useStyles()

  const navigate = useNavigate()

  const handleOnClick = (category) => {
    navigate(`/events/${category}`)
  }

  return (
    <Box sx={{ padding: '20px', mt: 10 }}>
      <TopBar />
      <Typography variant="h4" className={classes.categoryTitle} sx={{mb: 10, pb: 5}}>
        Find the Perfect Event for You
      </Typography>
      <Grid container spacing={3} justifyContent="center" sx={{mb: 8}}>
  {categories.map((category, index) => (
    <Grid item xs={12} sm={6} md={4} key={index} display="flex" justifyContent="center">
      <Card
        className={classes.card}
        sx={{
          borderRadius: 2,
          overflow: "hidden",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: 6,
          },
          width: "100%",
          maxWidth: 345, 
        }}
        onClick = {() => handleOnClick(category.name.toUpperCase())}
      >
        <CardMedia
          component="img"
          className={classes.media}
          image={category.image}
          alt={category.name}
        />
        <CardContent>
          <Typography variant="h5">{category.name}</Typography>
          <Typography className={classes.description}>{category.description}</Typography>
        </CardContent>
      </Card>
    </Grid>
     ))}
      </Grid>
       
      <Footer />
    </Box>
  );
}

export default Categories;
