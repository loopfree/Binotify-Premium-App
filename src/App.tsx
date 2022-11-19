import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ListSongs from "./pages/ListSongs";
import ListSubs from "./pages/ListSubs";
import NotFound from "./pages/NotFound";

function App() {
  const [user, setUser] = useState<null | string>(localStorage.getItem("user") || null);
  useEffect(() => {
    if (user === null && window.location.pathname !== "/login" && window.location.pathname !== "/register") {
      window.location.href = "/login";
    }
  }, [user]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={user === "artist" ? <ListSongs /> : <ListSubs /> } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
