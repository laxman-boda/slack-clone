import React from 'react';
import './App.css';
import { BrowserRouter,
  Switch,
  Route,
  Link, 
  Routes} from 'react-router-dom'
import Header from './Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route exact path="/header"  element={<Header />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
