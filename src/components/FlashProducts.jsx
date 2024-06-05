import Product from "./Product";

const FlashProducts = (props) => {
  const displayFlashProducts = props.products.map((product, index) => (
    <Product key={index} product={product} />
  ));
  return (
    <section className="cartegory-wrapper rounded-xl overflow-hidden">
      <div className="cartegory-header bg-primary-cerise p-4">
        <h2 className="text-neutral-white text-lg font-semibold">Flash</h2>
      </div>
      <div className="category-content grid grid-cols-2 gap-5 p-4 border border-gray-300 rounded-b-xl border-t-0 lg:grid-cols-4">
        {displayFlashProducts}
      </div>
    </section>
  );
};

export default FlashProducts;
