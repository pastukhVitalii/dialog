import React from 'react';
import './App.css';

import Messages from "./component/Messages/Messages";

let description = [
  {label: 'rationalist', className: 'black', id: 1},
  {label: 'communist', className: 'red', id: 2},
  {label: 'anime', className: 'black', id: 3}
  ];

const App = () => {
  return (
    <div className="App">
      <Messages quality={description}/>
    </div>
  );
};

export default App;
