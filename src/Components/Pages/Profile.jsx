import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="bg-white w-80 p-6 rounded-lg shadow text-center">

        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto object-cover"
        />

        <h2 className="text-2xl font-bold mt-4 text-[#550b14]">
          John Doe
        </h2>

        <p className="text-gray-600 mt-2">
          Interior Designer
        </p>

        <div className="mt-4 text-left">
          <p><b>Email:</b> john123@gmail.com</p>
          <p><b>Phone:</b> +91 9876543210</p>
          <p><b>City:</b> Chandigarh</p>
        </div>

        <button className="mt-5 bg-[#550b14] text-white px-5 py-2 rounded-lg">
          Edit Profile
        </button>

      </div>

    </div>
  );
};

export default Profile;