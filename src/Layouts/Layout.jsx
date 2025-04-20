import React, { useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import ChatPage from "../pages/ChatPage";
import ChatHeader from "../components/ChatHeader";
import HomePage from "../pages/HomePage";

const Layout = () => {
  const containerRef = useRef(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="main-body">
      <div className="container" ref={containerRef}>
        <ChatHeader onToggleDrawer={() => setDrawerOpen(true)} />
        <div className="all-main">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<HomePage />} />
            <Route
              path="/*"
              element={
                <ChatPage
                  drawerOpen={drawerOpen}
                  setDrawerOpen={setDrawerOpen}
                  containerRef={containerRef}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Layout;
