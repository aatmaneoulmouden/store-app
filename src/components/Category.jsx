import Product from "./Product";
import products from "../data/products";

const Category = (props) => {
  const name = props.name;

  // Get products of current category
  const CategoryProducts = products.filter(
    (product) => product.category === name
  );

  // Display category products
  const displayProducts = CategoryProducts.map((product, index) => (
    <Product key={index} product={product} />
  ));

  return (
    <section className="cartegory-wrapper rounded-xl overflow-hidden">
      <div className="cartegory-header bg-primary-green p-4">
        <h2 className="text-neutral-white text-lg font-semibold">{name}</h2>
      </div>
      <div className="category-content grid grid-cols-2 gap-5 p-4 border border-gray-300 rounded-b-xl border-t-0 lg:grid-cols-4">
        {displayProducts}
      </div>
    </section>
  );
};

export default Category;
