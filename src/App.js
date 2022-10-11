import { useState, useEffect, useReducer } from 'react'

import GlobalStyle from './Styles/Global';
import Calculator from './components/Calculator';

function App() {
    return (
      <div>
          <GlobalStyle />
          <Calculator />
      </div>
    );
}

export default App;
