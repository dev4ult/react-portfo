import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Container } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Journey from './pages/Journey';
import Project from './pages/Project';

const root = '/react-portfo';
const [about, projects, journey] = [root + '/about', root + '/projects', root + '/journey'];

function App() {
  return (
    <Router>
      <Box bg="blackAlpha.900" minH="100vh">
        <Container maxW="6xl">
          <Navbar />
          <Routes>
            <Route path={root} element={<Home />} />
            <Route path={about} element={<About />} />
            <Route path={projects} element={<Project />} />
            <Route path={journey} element={<Journey />} />
          </Routes>
        </Container>
      </Box>
    </Router>
  );
}

export default App;
