import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Banner from './components/Banner.jsx';
import NavBar from './components/NavBar.jsx';
import AboutSection from './components/AboutSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
      <Banner />
      <NavBar />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
