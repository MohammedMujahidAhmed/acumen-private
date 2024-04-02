import './App.css';
import EventsPage from './pages/EventsPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/event" element={<EventDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;