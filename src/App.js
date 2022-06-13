import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import StatisticsPage from "./StatisticsPage";
import Urls from "./Urls";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const App = () => {
  
  return (
    <div>
       <AppBar position="static">
       <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SHORTENER
          </Typography>
          </Toolbar>
          </Container>
       </AppBar>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="statistics/" element={<Urls />}/>
        <Route path="statistics/:urlCode" element={<StatisticsPage />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
