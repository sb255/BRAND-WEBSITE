import Catalogue from "./Catalogue";

function ProductShelf(props) {
  return (
    <section className="w-full bg-[#f7f6ef] px-5 py-16 sm:px-8 sm:py-20 md:px-12 md:py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#6b873f]">
              Our Products
            </p>

            <h2 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight text-[#26351f] sm:text-5xl lg:text-6xl">
              Goodness,
              <br />
              <span className="font-normal text-[#81926b]">
                straight from the source.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#70776a] md:pb-1">
            Carefully selected products made with quality ingredients
            and a commitment to better food.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12 md:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {props.cart?.map((items, index) => (
            <div
              key={`${items.name}-${index}`}
              className="flex justify-center"
            >
              <Catalogue
                productImage={items.image}
                cardTitle={items.name}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProductShelf;
