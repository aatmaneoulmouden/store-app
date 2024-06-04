const Product = (props) => {
  return (
    <article className="border border-gray-300 rounded-xl overflow-hidden">
      <div className="image-wrapper bg-gray-100">
        <img src="./simple-product.png" alt="" className="mx-auto" />
      </div>
      <div className="details-wrapper p-3">
        <h2 className="font-semibold text-lg text-neutral-black-dark">
          Blender Peru bol 2L 550w moulins mixeur robot -2 ans de garantie
        </h2>
        <small className="text-base block my-2">
          Sold by{" "}
          <span className="font-semibold text-primary-green">Aatmane</span>
        </small>
        <div className="flex justify-between items-center">
          <div className="pricing-discount flex items-end gap-4">
            <div className="pricing">
              <h3 className="current-price flex items-center gap-1 text-primary-green">
                <span className="text-4xl font-bold">450</span>
                <span className="text-sm font-semibold">
                  <p className="leading-3 mb-1">00</p>
                  <p className="leading-3">Dh</p>
                </span>
              </h3>
              <del className="prev-price text-neutral-black-light/60">
                609,00Dh
              </del>
            </div>
            <span className="discount bg-primary-cerise rounded-md text-neutral-white py-1 px-3 text-sm mb-[6px]">
              -26%
            </span>
          </div>
          <button className="bg-primary-green w-12 h-12 rounded-full flex justify-center items-center">
            <i className="fa-solid fa-cart-plus text-neutral-white text-lg"></i>
          </button>
        </div>
      </div>
    </article>
  );
};

export default Product;
