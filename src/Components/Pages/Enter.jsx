import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-[#550b14] text-white fixed">

      <h1 className="text-2xl font-bold p-6">
        Interior Admin
      </h1>

      <ul className="space-y-4 px-6">

        <li>
          <Link to="/view"> View Profile</Link>
        </li>

        <li>
          <Link to="/add"> Add data</Link>
        </li>

        <li>
          <Link to="/delete"> Delete Data</Link>
        </li>

        <li>
          <Link to="/update"> Update data</Link>
        </li>

      </ul>

    </div>
  );
};

export default Sidebar;