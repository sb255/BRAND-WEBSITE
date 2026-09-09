import ItemArrangement from "./ItemArrangement";

function PhotoWall(props) {
  return (
    <section className="w-full bg-[#f7f6ef] px-5 py-20 sm:px-8 md:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-14 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end lg:mb-20">

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#6b873f]">
              Our Farmers
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-[#26351f] sm:text-5xl lg:text-6xl">
              Stories that
              <br />
              <span className="font-normal text-[#81926b]">
                begin with the soil.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#70776a] md:justify-self-end">
            Behind every product is a farmer, a family and a story.
            Meet the people growing, building and shaping the future
            of Indian agriculture.
          </p>

        </div>

        {/* Story Wall */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">

          {props.exportPhotos?.map((items, index) => {

            /*
             * Create an asymmetric editorial layout.
             * Every few items gets a different size.
             */
            const layout =
              index % 6 === 0
                ? "lg:col-span-5 lg:row-span-2"
                : index % 6 === 1
                  ? "lg:col-span-7"
                  : index % 6 === 2
                    ? "lg:col-span-3"
                    : index % 6 === 3
                      ? "lg:col-span-4"
                      : index % 6 === 4
                        ? "lg:col-span-5"
                        : "lg:col-span-7";

            return (
              <div
                key={`${items.source}-${index}`}
                className={`${layout} min-h-[280px] sm:min-h-[320px] lg:min-h-0`}
              >
                <ItemArrangement
                  photos={items.source}
                  url={items.url}
                />
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default PhotoWall;
