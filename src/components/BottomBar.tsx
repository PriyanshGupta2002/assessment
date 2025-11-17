import { Link, useLocation } from "react-router-dom";
import { cn } from "../utils/cn";
import { bottomBarNavItems } from "../utils/constants";

const BottomBar = () => {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-black border-t border-gray-200 shadow-lg z-50">
      <div className="flex items-center justify-around py-7">
        {bottomBarNavItems.map((item) => {
          const isActive = location.pathname === item.url;
          return (
            <Link
              key={item.label}
              to={item.url}
              className={cn(
                "flex flex-col items-center gap-2 dark:text-gray-500 transition-colors",
                isActive && "dark:text-lime-500"
              )}
            >
              <span>
                <item.Icon className="w-6 h-6" />
              </span>
              <span className="text-sm font-semibold">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomBar;
