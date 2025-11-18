import { useState } from "react";
import { tradingCategories } from "../utils/constants";
import { cn } from "../utils/cn";

const CategorySlider = () => {
  const [activeCategory, setActiveCategory] = useState(2); // Default to "Forex" (id: 2)

  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex items-center gap-6 px-4 py-3 min-w-max">
        {tradingCategories.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "text-base font-medium whitespace-nowrap transition-colors duration-200",
                isActive
                  ? "text-white"
                  : "text-gray-500 dark:text-gray-500 hover:text-gray-300"
              )}
            >
              {category.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySlider;
