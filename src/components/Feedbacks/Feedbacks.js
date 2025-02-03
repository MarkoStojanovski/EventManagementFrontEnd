import { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress, Container, Alert, Pagination } from '@mui/material';
import axios from 'axios';
import TopBar from '../../ui/TopBar';
import Footer from '../../ui/Footer';
import Feedback from './Feedback';
import useStyles from '../../hooks/useStyles';

function Feedbacks() {

    const [feedbacks, setFeedbacks] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const [page, setPage] = useState(1); 
    const [totalPages, setTotalPages] = useState(1);

    const classes = useStyles()


    useEffect(()=> {
        const fetchFeedbacks = async () =>{
            try {
                const response = await axios.get(`http://localhost:8080/api/feedbacks?page=${page-1}`)
                setFeedbacks(response.data.feedbacks);
                setTotalPages(response.data.totalPages);
                setIsLoading(false)
            } catch (err) {
                setError("Error fetching feedbacks.")
                setIsLoading(false)
            }
        }
        fetchFeedbacks()
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
          <Typography variant="h4" className={classes.categoryTitle} sx={{mb: 10, pb: 5}}>
          Feedback from Our Community
          </Typography>
          <Feedback feedbacks={feedbacks}/>
          <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
          <Pagination 
            count={totalPages} 
            page={page} 
            onChange={(feedback, value) => setPage(value)} 
            color="primary" 
          />
          </Box>
        </Container>
        <Footer />
          </Box>
    )
}

export default Feedbacks
