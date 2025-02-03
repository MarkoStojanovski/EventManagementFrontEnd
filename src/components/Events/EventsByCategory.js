import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { Box, Typography, CircularProgress, Alert, Container, Pagination } from '@mui/material';
import axios from 'axios';
import TopBar from '../../ui/TopBar';
import Event from './Event';
import Footer from '../../ui/Footer';
import useStyles from '../../hooks/useStyles';

const EventsByCategory = () => {
  const { category } = useParams(); 
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null); 

  const [page, setPage] = useState(1); 
  const [totalPages, setTotalPages] = useState(1);

  const classes = useStyles()


  useEffect(() => {
    const getEvents = async () => {
      try {
        setIsLoading(false); 
        const response = await axios.get(`http://localhost:8080/api/events?category=${category}&page=${page-1}`);
        setEvents(response.data.events);
        setTotalPages(response.data.totalPages);
      } catch (err) {
        setError('Failed to fetch events. Please try again later.');
        setIsLoading(false); 
      } 
    };
    getEvents();
  }, [category,page]);

  const formattedCategory = category.replace(/_/g, ' ');

 
  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
      </Box>
    );
  }

 
  if (error) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  if (events.length === 0) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Alert severity="info">No events available in the {formattedCategory} category at the moment.</Alert>
      </Box>
    );
  }

  return (
    <Box>
      <TopBar />
      <Container maxWidth="lg" sx={{ mt: 12, mb: 15 }}>
        <Typography variant="h4" className={classes.categoryTitle} sx={{mb: 10, pb: 5}}>
          Events in {formattedCategory}
        </Typography>
        <Event events={events} />

        <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
          <Pagination 
            count={totalPages} 
            page={page} 
            onChange={(event, value) => setPage(value)} 
            color="primary" 
          />
        </Box>

      </Container>
      <Footer />
    </Box>
  );
};

export default EventsByCategory;
