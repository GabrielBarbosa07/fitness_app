import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Box width="100%" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
