import React from "react";
import { useNavigate } from "react-router";

const Links = () => {
  let navigate = useNavigate();
  return (
    <div>
      <ul className="flex flex-col space-y-4 underline underline-offset-2 text-blue-400 cursor-pointer">
        {/* regular */}
        <li onClick={() => navigate("/links")}>Links</li>
        <li onClick={() => navigate("/login")}>Login</li>
        <li onClick={() => navigate("/register")}>Register</li>
        <li onClick={() => navigate("/shady")}>Shady</li>
        <div className="border-2"></div>

        {/* protected */}
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/admin")}>Admin</li>
        <li onClick={() => navigate("/super-admin")}>SuperAdmin</li>
        <li onClick={() => navigate("/lounge")}>Lounge</li>
        {/* <li onClick={() => navigate("/unauthorized")}>Unauthorized</li> */}
      </ul>
    </div>
  );
};

export default Links;
