import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const fetchGreeting = async () => {
    if (!name) {
      setMessage("Please enter a name.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/greet?name=${name}`);
      const data = await response.json();
      setMessage(data.message || data.error);
    } catch (error) {
      console.error("Error fetching data:", error);
      setMessage("Error fetching data");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="">
        <h1 className="text-[50px] font-bold mb-[50px]">Welcome To Younglabs</h1>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded w-full mb-4"
        />
        <button
          onClick={fetchGreeting}
          className="px-4 w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Get Greeting
        </button>
        {message && <p className="mt-4 text-lg font-semibold">{message}</p>}
      </div>
    </div>
  );
};

export default App;
