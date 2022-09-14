import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import About from './pages/About';
import NotMatch from './pages/NotMatch';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<TodoContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
