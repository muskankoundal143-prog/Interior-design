import React from "react";

const Update = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="bg-white max-w-xl mx-auto p-6 rounded-lg shadow">

        <h1 className="text-2xl font-bold text-[#550b14] mb-6">
          Update Interior Data
        </h1>

        <div className="space-y-4">

          <input
            type="text"
            value="Modern Living Room"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            value="John Smith"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            value="Interior Designer"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="number"
            value="500000"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            value="Chandigarh"
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            className="w-full border p-3 rounded-lg"
            rows="4"
            defaultValue="Luxury modern interior design project with elegant furniture."
          ></textarea>

          <input
            type="file"
            className="w-full border p-3 rounded-lg"
          />

          <button className="bg-[#550b14] text-white px-6 py-3 rounded-lg">
            Update Data
          </button>

        </div>

      </div>

    </div>
  );
};

export default Update;