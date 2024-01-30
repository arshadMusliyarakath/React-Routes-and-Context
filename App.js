import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Contact from "./pages/Contact";
import Post from "./pages/Post";
import { AppContext } from "./AppContext";



function App() {

  const [username, setUserName] = useState('Sidheek');


  return (
    <>
      <AppContext.Provider value={{username : username}}>
        <BrowserRouter>
          <nav>
            <Link to={'/contact'}>Contact Page</Link>
            <br />
            <Link to={'/post'}>Post Page</Link>
            <br />
            <br />
          </nav>
          <Routes>
            <Route path="/contact" element={<Contact title="Contact Page"/>} />
            <Route path="/post" element={<Post title="Post Page" />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>

 

    </>
  );
}

export default App;
