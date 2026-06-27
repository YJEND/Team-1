import useShopStore from "../store/useShopStore";

const CATEGORIES = ["전체", "전자기기", "도서", "문구류"];

function CategoryFilter() {
  const selectedCategory = useShopStore((state) => state.selectedCategory);
  const setSelectedCategory = useShopStore((state) => state.setSelectedCategory);

  return (
    <div className="category-filter">
      {CATEGORIES.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "active" : ""}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
