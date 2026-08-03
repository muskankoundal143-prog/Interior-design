import React from "react";

const Delete = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="bg-white max-w-xl mx-auto p-6 rounded-lg shadow">

        <h1 className="text-2xl font-bold text-[#550b14] mb-6">
          Delete Interior Data
        </h1>

        <div className="border p-4 rounded-lg mb-4">

          <h2 className="text-xl font-semibold">
            Modern Living Room
          </h2>

          <p className="text-gray-600 mt-2">
            Client: John Smith
          </p>

          <p className="text-gray-600">
            Location: Chandigarh
          </p>

          <button className="mt-4 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700">
            Delete
          </button>

        </div>


        <div className="border p-4 rounded-lg mb-4">

          <h2 className="text-xl font-semibold">
            Luxury Bedroom Design
          </h2>

          <p className="text-gray-600 mt-2">
            Client: Emma Wilson
          </p>

          <p className="text-gray-600">
            Location: Delhi
          </p>

          <button className="mt-4 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700">
            Delete
          </button>

        </div>

      </div>

    </div>
  );
};

export default Delete;           