import Category from "./Category";
import categories from "../data/categories";
import FlashProducts from "./FlashProducts";
import products from "../data/products";

const Main = () => {
  const displayCategories = categories.map((category, index) => (
    <Category key={index} name={category} />
  ));

  const flashProducts = products.filter(product => product.isFlash);

  return (
    <main className="py-6">
      <div className="container">
        <div className="categories-wrapper grid grid-cols-1 gap-y-6">
          <FlashProducts products={flashProducts} />
          {displayCategories}
        </div>
      </div>
    </main>
  );
};

export default Main;
