import React from "react";
import {MemoizedRouter} from './routes/Router';
import { useTheme } from './hooks';

import './App.css';

function App() {
        const {
        theme
    } = useTheme();
  return (
    <div className="App main" style={{backgroundImage: `url(${theme})`}}>
            <MemoizedRouter />
    </div>
  );
}

export default App;