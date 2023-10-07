import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ContactForm from './pages/contactUs';
import Home from './pages/home';
import AboutUs from './pages/aboutUs';
import Navbar from './components/navbar';
import Events from './pages/events';
import LearnMore from './pages/learnMore';
import { useEffect} from 'react';
import { useLocation } from 'react-router-dom';

const App = () => {

    function ScrollToTop() {
        const { pathname, hash } = useLocation();
      
        useEffect(() => {
          if (hash) {
            const element = document.getElementById(hash.slice(1));
            if (element) {
              element.scrollIntoView();
            }
          } else {
            window.scrollTo(0, 0);
          }
        }, [pathname, hash]);
      
        return null;
      }
    return (
        <Router>
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/about" element={< AboutUs />} />
                <Route path="/events" element={< Events />} />
                <Route path="/contact" element={< ContactForm />} />
                <Route path="/learn-more" element={< LearnMore />} />
                
            </Routes>
        </Router>
    );
}

export default App;