import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
            <>
              <Main />
              <Footer />
              <Cart />
            </>
          } />
          <Route path='/login' element={<Header/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
