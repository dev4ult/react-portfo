import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Box, Container } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';
import Journey from './pages/Journey';
import Project from './pages/Project';

const root = '/react-portfo';
const [about, project, journey] = [root + '/about', root + '/project', root + '/journey'];

function App() {
  const [page, setPage] = useState<string>('');

  function handleTab(newPath: string): void {
    setPage(newPath);
  }

  return (
    <Router>
      <Box bg="blackAlpha.900" minH="100vh">
        <Container maxW="6xl" minH="100vh" px="5" pos="relative">
          <Navbar page={page} handleTab={handleTab} />
          <Routes>
            <Route path={root} element={<Home handleTab={handleTab} />} />
            <Route path={about} element={<About handleTab={handleTab} />} />
            <Route path={project} element={<Project handleTab={handleTab} />} />
            <Route path={journey} element={<Journey handleTab={handleTab} />} />
          </Routes>
          <Footer />
        </Container>
      </Box>
    </Router>
  );
}

export default App;
