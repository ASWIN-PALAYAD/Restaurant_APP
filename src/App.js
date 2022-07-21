import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RestaurentDetails from './components/RestaurentDetails';


function App() {
  return (
    <div className="App">
      <Router>

        <Header />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/details/:id' element={<RestaurentDetails/>}/>

        </Routes>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
