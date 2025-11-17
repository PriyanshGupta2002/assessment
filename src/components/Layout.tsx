import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <main className="flex-1 overflow-y-auto pb-20">
        <Outlet />
      </main>
      <BottomBar />
    </div>
  );
};

export default Layout;
