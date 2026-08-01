import React, { useState } from "react";
import { Link } from "react-router-dom";
const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      alert("Login Successful");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="min-h-screen flex pt-20 justify-center bg-[#f8f5f5]">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-[#550b14] mb-2">
          Admin Login
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Sign in to continue
        </p>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:border-[#550b14]"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 mb-6 focus:outline-none focus:border-[#550b14]"
          />
<div className="flex flex-col sm:flex-row gap-4">

  <button
    type="submit"
    className="w-full sm:w-1/2 bg-[#550b14] text-white py-3 rounded-lg font-semibold hover:bg-[#6d0f1b] transition"
  >
    Login
  </button>


  <Link to="/enter" className="w-full sm:w-1/2">

    <button
      type="button"
      className="w-full border border-[#550b14] text-[#550b14] py-3 rounded-lg font-semibold hover:bg-[#550b14] hover:text-white transition"
    >
      Enter
    </button>

  </Link>

</div>
        </form>
      </div>
    </div>
  );
};

export default Admin;