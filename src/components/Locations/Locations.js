import { Alert, Box, CircularProgress, Container, Pagination, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import TopBar from "../../ui/TopBar"
import Footer from "../../ui/Footer"
import Location from "./Location"
import useStyles from "../../hooks/useStyles"

function Locations() {

    const [locations, setLocations] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const [page, setPage] = useState(1); 
    const [totalPages, setTotalPages] = useState(1);

    const classes = useStyles()

    useEffect(()=>{
        const fetchLocations = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/locations?page=${page-1}`)
                setLocations(response.data.locations)
                setTotalPages(response.data.totalPages);
                setIsLoading(false)
            } catch (err) {
                setError("Error fetching locations.")
                setIsLoading(false)
            }
        }
        fetchLocations()
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
          Locations We Cover
          </Typography>
          <Location locations={locations}/>

          <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
                    <Pagination 
                      count={totalPages} 
                      page={page} 
                      onChange={(location, value) => setPage(value)} 
                      color="primary" 
                    />
                    </Box>
        </Container>
        <Footer />
          </Box>
    )
}

export default Locations
