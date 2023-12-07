// The App
// Imports to be used to present to the homepage and subsequent links
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipePage from './Components/RecipePage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Body from './Components/Body';


function App() {
  return (
    <Router>
      <div>
        <Header /> {/* Accesses the header to be used in the homepage*/}
        <Routes>
          <Route path="/" element={<Body />} /> {/* Creates A link to the homepage */}
          <Route path="/recipe/:id" element={<RecipePage />} /> {/* Creates a link for the Recipe page */}
        </Routes>
        <Footer /> {/* Accesses the footer to be used in the homepage*/}
      </div>
    </Router>
  );
}

export default App;
