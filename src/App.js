import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Admin,
  Links,
  Login,
  Lounge,
  Register,
  Shady,
  SuperAdmin,
  Unauthorized,
} from "./pages";

function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center mx-auto text-2xl">
      <Router>
        <Routes>
          {/* public */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/links" element={<Links />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* protect */}
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/supe-admin" element={<SuperAdmin />} />
          <Route path="/lounge" element={<Lounge />} />

          {/* shady */}
          <Route path="/*" element={<Shady />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
