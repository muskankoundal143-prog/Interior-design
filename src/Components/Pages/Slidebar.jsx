import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-full md:w-64  min-h-auto md:min-h-screen bg-[#550b14] text-white">

      <h1 className="text-xl sm:text-2xl font-bold p-4 sm:p-6 text-center md:text-left">
        Interior Admin
      </h1>

      <ul className="flex flex-col sm:flex-row md:flex-col gap-2 md:gap-4 px-4 sm:px-6 pb-4">
     <li>
        <Link 
         to="/view"
          className="block p-2 rounded hover:bg-[#7a1b2b]" >
            View Profile
          </Link>
        </li>

        <li>
          <Link
            to="/add"
            className="block p-2 rounded hover:bg-[#7a1b2b]">
            Add Data
          </Link>
        </li>

        <li>
          <Link
            to="/delete"
            className="block p-2 rounded hover:bg-[#7a1b2b]">
            Delete Data
          </Link>
        </li>

        <li>
          <Link
            to="/update"
            className="block p-2 rounded hover:bg-[#7a1b2b]">
            Update Data
          </Link>
        </li>

      </ul>

    </div>
  );
};

export default Sidebar;