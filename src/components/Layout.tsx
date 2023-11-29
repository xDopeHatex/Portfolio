import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="bg-slate-300/20">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
