import React from 'react';
import './App.css';
import { Header } from './app/components/header';
import { Sidebar } from './app/components/sidebar/sidebar.component';

function App() {
  return (
    <div className="app">
       {/* Header */}
      <Header/>
      <div className="app__body">
          <Sidebar/>
          {/* Feed */}
          {/* Widgets */}

      </div>
    </div>
  );
}

export default App;
