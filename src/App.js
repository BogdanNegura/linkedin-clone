import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Feed } from './app/components/feed/feed.component';
import { Header } from './app/components/header';
import { Login } from './app/components/login/login.component';
import { Sidebar } from './app/components/sidebar/sidebar.component';
import { auth } from './app/firebase';
import { login, logout, selectUser } from './features/userSlice';

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoUrl
        }))
      } else {
        // user is logged out
        dispatch(logout())
      }
    })
  }, [])

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
