import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { Feed } from './app/components/feed/feed.component';
import { Header } from './app/components/header';
import { Login } from './app/components/login/login.component';
import { Sidebar } from './app/components/sidebar/sidebar.component';
import { selectUser } from './features/userSlice';

function App() {

  const user = useSelector(selectUser)

  return (
    <div className="app">
      <Header/>
      {!user ? 
        <Login/> :
        <div className="app__body">
          <Sidebar/>
          <Feed/>
          {/* Widgets */}
      </div> }
      
    </div>
  );
}

export default App;
