import React from 'react';
import './App.css';

import RouterPage from './RouterPage';

function App() {
  return (
    <>
    <p className="paraCSS">
        &nbsp; <span className="Left"> Welcome to <b>Criss Cross Game</b> </span>
        
      </p>
      <RouterPage />
      <p className="paraCSSEnd">&nbsp;
            <span>
              <small>
                &copy; Copyright {new Date().getFullYear()}, Khushboo Chaurasiya
              </small>
            </span>
          </p>
      </>
  );
}

export default App;
