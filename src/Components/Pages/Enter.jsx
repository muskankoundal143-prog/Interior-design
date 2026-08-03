import Slidebar from "./Slidebar";

const Enter = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">


      <div className="w-full md:w-64">
        <Slidebar />
      </div>

      <div className="flex-1 bg-gray-100 p-4 sm:p-6 md:p-8">

        <h1 className="text-2xl sm:text-3xl font-bold text-[#550b14]">
          Interior Admin Dashboard
        </h1>

        <div className="mt-6 bg-white p-4 sm:p-6 rounded-lg shadow">
          <h2 className="text-lg sm:text-xl font-semibold">
            Welcome Admin
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Manage your interior designs, profiles and projects here.
          </p>
        </div>



        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">

          <div className="bg-white p-4 sm:p-5 rounded-lg shadow">
            <h3 className="text-base sm:text-lg font-bold text-[#550b14]">
              Total Projects
            </h3>
            <p className="text-2xl sm:text-3xl font-bold mt-2">
              120+
            </p>
          </div>


          <div className="bg-white p-4 sm:p-5 rounded-lg shadow">
            <h3 className="text-base sm:text-lg font-bold text-[#550b14]">
              Clients
            </h3>
            <p className="text-2xl sm:text-3xl font-bold mt-2">
              85+
            </p>
          </div>


          <div className="bg-white p-4 sm:p-5 rounded-lg shadow">
            <h3 className="text-base sm:text-lg font-bold text-[#550b14]">
              Designs
            </h3>
            <p className="text-2xl sm:text-3xl font-bold mt-2">
              250+
            </p>
          </div>

        </div>


     
        <h2 className="text-xl sm:text-2xl font-bold mt-8 text-[#550b14]">
          Recent Designs
        </h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-4">

          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
            className="w-full h-40 sm:h-48 object-cover rounded-lg shadow"
            alt="Interior"
          />

          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
            className="w-full h-40 sm:h-48 object-cover rounded-lg shadow"
            alt="Interior"
          />

          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace"
            className="w-full h-40 sm:h-48 object-cover rounded-lg shadow"
            alt="Interior"
          />

        </div>

      </div>

    </div>
  );
};

export default Enter;