import { Box, Typography } from "@mui/material";

function AboutUs() {

  return (
    <Box id="about-us" sx={{ mt: 10, textAlign: "center" }}>
      <Typography
        variant="h5"
        fontWeight="bold"
        color="textSecondary"
        gutterBottom
      >
        About Us
      </Typography>
      <Typography variant="body1" color="textSecondary">
        At{" "}
        <span style={{ fontWeight: "bold", color: "black" }}>
          {" "}
          EventOrganizer{" "}
        </span>{" "}
        , we are passionate about transforming ordinary moments into
        extraordinary memories. Our journey began with a shared love for
        creating unforgettable experiences, starting from organizing vibrant
        club parties in our younger days. What began as a small venture quickly
        grew into a passion-driven mission to connect people through unique and
        meaningful events. Over the years, we expanded our horizons—bringing
        people together under the sun with lively vacation parties, fostering
        connections and excitement that lasted long after the fun ended. Today,
        we proudly organize a wide range of events, from electrifying concerts
        and thrilling sports competitions to captivating stand-up comedy shows
        and bespoke private gatherings. At our organization, we believe that
        every moment has the potential to be extraordinary. With a deep
        commitment to creativity, innovation, and excellence, we strive to
        curate events that leave lasting impressions and bring people closer
        together. Whether it’s a large-scale celebration or an intimate
        experience, we’re here to turn dreams into reality—because at the heart
        of every event, it’s the people who make it unforgettable. Join us as we
        continue to redefine what it means to celebrate life, one remarkable
        event at a time. Let’s make your next moment truly unforgettable.
      </Typography>
    </Box>
  );
}

export default AboutUs;
