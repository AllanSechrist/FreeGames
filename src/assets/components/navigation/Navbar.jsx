import { Link } from "react-router";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gamelist">Saved Games</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl"><Link to="/">Free Games</Link></a>
      </div>
      <div className="navbar-end hidden lg:flex">
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

// <div className="navbar bg-base-100 shadow-sm mb-4 rounded">
//   <div className="flex-1">
//     <a className="btn btn-ghost text-xl">Free Games</a>
//   </div>
//   <div className="flex-none">
//     <ul className="menu menu-horizontal px-1">
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/gamelist">Saved Games</Link>
//       </li>
//     </ul>
//   </div>
// </div>
