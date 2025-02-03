import { useEffect, useState } from "react";
import Homepage from "./ui/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CircularIndeterminate from "./ui/CircularIndeterminate";
import LogIn from "./authentication/LogIn";
import SignUp from "./authentication/SignUp";
import Categories from "./components/Categories/Categories";
import Events from "./components/Events/Events";
import Locations from "./components/Locations/Locations";
import Feedbacks from "./components/Feedbacks/Feedbacks";
import Sponsors from "./components/Sponsors/Sponsors";
import EventsByCategory from "./components/Events/EventsByCategory"
import Tickets from "./components/Tickets/Tickets";

function App() {

  const [isLoading, setIsLoading] = useState(true)


  useEffect(()=>{
    const timer = setTimeout(()=>{
      setIsLoading(false);
    },2000)
    return () => clearTimeout(timer)
  },[])

  return (
    <Router>
      {isLoading ? (
        <CircularIndeterminate />
      ) :
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/categories" element={<Categories />}/>
        <Route path="/events" element={<Events />}/>
        <Route path="/events/:category" element={<EventsByCategory />} /> Dynamic category route

        <Route path="/locations" element={<Locations />}/>
        <Route path="/feedbacks" element={<Feedbacks />}/>
        <Route path="/sponsors" element={<Sponsors />}/>
        <Route path="/tickets" element={<Tickets />}/>
      </Routes>
      }
    </Router>
  );
}

export default App;
