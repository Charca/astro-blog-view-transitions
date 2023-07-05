import cx from "classnames";
import { useEffect, useState } from "react";
import { categories } from "@data/category";

const color = {
  green: "text-emerald-700",
  blue: "text-blue-600",
  orange: "text-orange-700",
  purple: "text-purple-600",
  pink: "text-pink-600",
};

function TagSelector() {
  const [selection, setSelection] = useState([]);

  useEffect(() => {
    const articles = document.querySelectorAll("#latest-articles .article");
    // TODO Implement filtering
    // 1. For each article, if selection is not empty or the selection includes the article's category, remove hidden class
    // 2. Otherwise, add class hidden
  }, [selection]);

  return (
    <div className="mb-4 mt-4 text-xs font-medium tracking-wider uppercase">
      Filter by tag:{" "}
      {categories.map((category) => {
        const isActive = selection.includes(category.slug);
        return (
          <button
            key={category.slug}
            className={`btn btn-sm btn-outline-primary me-2 mb-2`}
            onClick={() => {
              if (isActive) {
                setSelection(selection.filter((x) => x !== category.slug));
              } else {
                setSelection([...selection, category.slug]);
              }
            }}>
            <span
              className={cx(
                "inline-block text-xs font-medium tracking-wider uppercase",
                isActive || !selection.length
                  ? color[category.color]
                  : "text-gray-500"
              )}>
              {category.title}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default TagSelector;
