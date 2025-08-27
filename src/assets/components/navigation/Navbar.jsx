import { Link } from "react-router";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm mb-4 rounded">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Free Games</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gamelist">Saved Games</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
