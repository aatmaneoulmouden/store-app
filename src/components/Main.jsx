import Category from "./Category";
import categories from "../data/categories";

const Main = () => {
  const displayCategories = categories.map((category, index) => <Category key={index} name={category} />);
  return (
    <main className="py-6">
      <div className="container">
        <div className="categories-wrapper grid grid-cols-1 gap-y-6">
          {displayCategories}
        </div>
      </div>
    </main>
  );
};

export default Main;
