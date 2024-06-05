const Product = (props) => {
  const title = props.product.title;
  const seller = props.product.seller;
  const productHasDiscount = props.product.discount.hasDiscount;
  const discountValue = props.product.discount.discountValue;

  // Current price
  const currentPriceInt = props.product.price;
  const currentPriceStr = currentPriceInt.toString();
  const currentPriceParts = currentPriceStr.split(".");
  let currentPrice = {
    whole: currentPriceParts[0],
    fractional: currentPriceParts[1],
  };

  // Update current price if product has discount
  if (productHasDiscount) {
    const newPrice = (currentPriceInt - currentPriceInt * (discountValue / 100)).toFixed(2);
    const newPriceParts = newPrice.split(".");
    currentPrice.whole = newPriceParts[0];
    currentPrice.fractional = newPriceParts[1];
  }

  // Display previous price if the product has discount
  const displayPrevPrice = productHasDiscount && (
    <del className="prev-price text-neutral-black-light/60">
      {currentPriceInt}Dh
    </del>
  );

  // Display discount value if the product has discount
  const displayDiscountValue = productHasDiscount && (
    <span className="discount bg-primary-cerise rounded-md text-neutral-white py-1 px-3 text-sm mb-[6px]">
      -{discountValue}%
    </span>
  );

  return (
    <article className="border border-gray-300 rounded-xl overflow-hidden">
      <div className="image-wrapper bg-gray-100">
        <img src="./simple-product.png" alt="" className="mx-auto" />
      </div>
      <div className="details-wrapper p-3">
        <h2 className="font-semibold text-lg text-neutral-black-dark">
          {title}
        </h2>
        <small className="text-base block my-2">
          Sold by{" "}
          <span className="font-semibold text-primary-green">{seller}</span>
        </small>
        <div className="flex justify-between items-center">
          <div className="pricing-discount flex items-end gap-4">
            <div className="pricing">
              <h3 className="current-price flex items-center gap-1 text-primary-green">
                <span className="text-4xl font-bold">{currentPrice.whole}</span>
                <span className="text-sm font-semibold">
                  <p className="leading-3 mb-1">{currentPrice.fractional}</p>
                  <p className="leading-3">Dh</p>
                </span>
              </h3>
              {displayPrevPrice}
            </div>
            {displayDiscountValue}
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
