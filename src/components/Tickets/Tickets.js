import { useEffect, useState } from "react"
import useStyles from "../../hooks/useStyles";
import axios from "axios";
import { Alert, Box, CircularProgress, Container, Pagination, Typography } from "@mui/material";
import Footer from "../../ui/Footer";
import TopBar from "../../ui/TopBar";
import Ticket from "./Ticket";

function Tickets() {

    const [tickets, setTickets] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const [page, setPage] = useState(1); 
    const [totalPages, setTotalPages] = useState(1);

    const classes = useStyles()

    useEffect(()=>{
        const fetchTickets = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/tickets?page=${page - 1}`);
                console.log(response.data.tickets)
            setTickets(response.data.tickets)
            setTotalPages(response.data.totalPages);
            setIsLoading(false)
            } catch (err) {
                setError("Error fetching tickets.")
                setIsLoading(false)
            }
        }
        fetchTickets()
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

      if (tickets.length === 0) {
        return <Alert severity="info">No tickets available at the moment.</Alert>;
      }

    return (
        <Box>
      <TopBar />
      <Container maxWidth="lg" sx={{ mt: 12, mb: 15 }}>
        <Typography variant="h4"  className={classes.categoryTitle} sx={{mb: 10, pb: 5}}>
          Tickets for pure Excitement
        </Typography>
        
        <Ticket tickets={tickets}/>

        <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
          <Pagination 
            count={totalPages} 
            page={page} 
            onChange={(ticket, value) => setPage(value)} 
            color="primary" 
          />
        </Box>
      
      </Container>
      <Footer />
        </Box>
    )
}

export default Tickets
