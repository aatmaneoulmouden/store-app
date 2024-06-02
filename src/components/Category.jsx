import Product from "./Product";

const Category = () => {
  return (
    <section className="cartegory-wrapper rounded-xl overflow-hidden">
      <div className="cartegory-header bg-primary-green p-4">
        <h2 className="text-neutral-white text-lg font-semibold">Sport</h2>
      </div>
      <div className="category-content grid grid-cols-2 p-4 border border-gray-300 rounded-b-xl border-t-0">
        <Product />
      </div>
    </section>
  );
};

export default Category;
