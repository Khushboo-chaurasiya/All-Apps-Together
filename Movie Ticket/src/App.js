import React from "react";
import "./App.css";

import RouterPage from "./RouterPage";

function App() {
  return (
    <React.Fragment>
    
      
      <RouterPage />
    
    <>
    <p className="paraCSSEnd">
        <span>
          <small>
            &copy; Copyright {new Date().getFullYear()}, Khushboo Chaurasiya
          </small>
        </span>
      </p>
    </>
    </React.Fragment>
  );
}

export default App;
