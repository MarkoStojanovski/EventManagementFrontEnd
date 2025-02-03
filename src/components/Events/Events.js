import { Alert, Box, CircularProgress, Container, Pagination, Typography } from "@mui/material"
import Footer from "../../ui/Footer"
import TopBar from "../../ui/TopBar"
import axios from "axios";
import Event from "./Event";

import { useEffect, useState } from "react"
import useStyles from "../../hooks/useStyles";

function Events() {

    const [events, setEvents] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const [page, setPage] = useState(1); 
    const [totalPages, setTotalPages] = useState(1);

    const classes = useStyles()


    useEffect(()=>{
        const fetchEvents = async () => {
    try{        
        const response = await axios.get(`http://localhost:8080/api/events?page=${page - 1}`);
        setEvents(response.data.events);
        setTotalPages(response.data.totalPages);
        setIsLoading(false)
         }
    catch (err) {
        setError("Error fetching events.")
        setIsLoading(false)
        }
       }
        fetchEvents();
    },[page])

    if (isLoading) {
        return (
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <CircularProgress />
          </Box>
        );
      }
    
      if (error) {
        return <Alert severity="error">{error}</Alert>;
      }
    return (
        <Box>
      <TopBar />
      <Container maxWidth="lg" sx={{ mt: 12, mb: 15 }}>
        <Typography variant="h4"  className={classes.categoryTitle} sx={{mb: 10, pb: 5}}>
          Upcoming Events
        </Typography>
        
        <Event events={events}/>

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
}

export default Events
