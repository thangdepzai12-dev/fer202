import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import TopBar from './components/TopBar.jsx';
import Banner5 from './components/Banner5.jsx';
import Breadcrumbs from './components/Breadcrumbs.jsx';
import StudentsDetail from './components/StudentsDetail.jsx';
import Footer5 from './components/Footer5.jsx';

function App() {
  return (
    <div>
      <TopBar />
      <Banner5 />
      <Breadcrumbs />
      <StudentsDetail />
      <Footer5 />
    </div>
  );
}

export default App;
