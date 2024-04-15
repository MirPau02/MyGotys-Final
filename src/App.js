import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './router/Router.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;