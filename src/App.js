import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'video-react/dist/video-react.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { useState } from 'react';

import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import { UserContext } from './UserContext.js';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  return (
    <>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <Header />

        <Routes>
          <Route path="/" element={<VideoList />} />

          <Route path="/videos/:id" element={<VideoDetail />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
