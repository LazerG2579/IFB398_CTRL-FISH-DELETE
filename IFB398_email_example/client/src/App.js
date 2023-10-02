import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ContactForm from './pages/contactUs';
import Home from './pages/home';
import AboutUs from './pages/aboutUs';
import Navbar from './components/navbar';
import GetInvolved from './pages/getInvolved';
import LearnMore from './pages/learnMore';
import Donate from './pages/donate';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/about" element={< AboutUs />} />
                <Route path="/events" element={< GetInvolved />} />
                <Route path="/contact" element={< ContactForm />} />
                <Route path="/learn-more" element={< LearnMore />} />
                
            </Routes>
        </Router>
    );
}

export default App;