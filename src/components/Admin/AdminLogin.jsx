import React, { useState, useEffect } from "react";
import { CiLock } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";

function AdminLogin() {
  const [userIp, setUserIp] = useState("your IP"); // Default placeholder
  const [warning, setWarning] = useState(
    `⚠️ SECURITY NOTICE: This system is heavily monitored. Unauthorized access attempts will be logged and reported to cybersecurity authorities.`
  );
  const [password, setPassword] = useState("");

  // Fetch user's IP address
  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => setUserIp(data.ip))
      .catch(() => setUserIp("Unknown IP"));
  }, []);

  const handleLogin = () => {
    if (password !== "yourSecurePassword") {
      setWarning(
        `🚨 ALERT: Incorrect password! Further failed attempts from IP **${userIp}** will trigger **automatic tracking & reporting to law enforcement. LAST WARNING!**`
      );
    } else {
      alert("Login successful!");
      // Proceed with authentication logic
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-800 text-white">
      <h1 className="text-3xl mb-4 font-light text-center">
        🔒 Restricted Access: Authorized Personnel Only
      </h1>
      <p className="text-red-500 text-sm mb-6 px-4 text-center">{warning}</p>

      <div className="w-full max-w-sm min-w-[200px]">
        <div className="relative">
          <CiLock className="absolute left-3 top-3 text-gray-400" />
          <input
            type="password"
            className="w-full bg-gray-900 placeholder-gray-400 text-white text-sm border border-gray-600 rounded-md pl-10 pr-16 py-2 focus:outline-none focus:border-red-500 hover:border-gray-400 shadow-sm focus:shadow"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="absolute right-1 top-1 rounded bg-red-600 py-1 px-2.5 text-center text-sm text-white transition-all shadow-sm hover:bg-red-700 focus:bg-red-700"
            type="button"
            onClick={handleLogin}
          >
            <IoIosArrowRoundForward size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
