import React from "react";

const Add = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="bg-white max-w-xl mx-auto p-6 rounded-lg shadow">

        <h1 className="text-2xl font-bold text-[#550b14] mb-6">
          Add Interior Data
        </h1>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Project Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Client Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Designer Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="number"
            placeholder="Project Budget"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Location"
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            placeholder="Project Description"
            className="w-full border p-3 rounded-lg"
            rows="4"
          ></textarea>

          <input
            type="file"
            className="w-full border p-3 rounded-lg"
          />

          <button className="bg-[#550b14] text-white px-6 py-3 rounded-lg">
            Add Project
          </button>

        </div>

      </div>

    </div>
  );
};

export default Add;