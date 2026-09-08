function Catalogue(props) {
  return (
    <article className="group w-full max-w-sm">

      {/* Product Image Container */}
      <div
        className="
          relative
          aspect-square
          overflow-hidden
          rounded-[2rem]
          bg-[#ebe9df]
          transition-all
          duration-500
          group-hover:shadow-xl
        "
      >

        {/* Small Product Label */}
        <div className="absolute left-4 top-4 z-10">
          <span
            className="
              rounded-full
              bg-white/70
              px-3
              py-1.5
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#536448]
              backdrop-blur-md
            "
          >
            Groxifi
          </span>
        </div>

        {/* Product Image */}
        <div className="flex h-full w-full items-center justify-center p-6 sm:p-8">
          <img
            src={props.productImage}
            alt={props.cardTitle}
            loading="lazy"
            className="
              h-full
              w-full
              object-contain
              transition-transform
              duration-700
              ease-out
              group-hover:scale-105
            "
          />
        </div>

        {/* Bottom Gradient */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-1/3
            bg-gradient-to-t
            from-black/10
            to-transparent
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

        {/* Hover Action */}
        <div
          className="
            absolute
            bottom-4
            right-4
            flex
            h-11
            w-11
            translate-y-3
            items-center
            justify-center
            rounded-full
            bg-[#315b20]
            text-white
            opacity-0
            shadow-lg
            transition-all
            duration-500
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h13M13 6l6 6-6 6"
            />
          </svg>
        </div>
      </div>

      {/* Product Information */}
      <div className="px-1 pt-4">

        <div className="flex items-start justify-between gap-3">

          <div>
            <p
              className="
                mb-1
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-[#929789]
              "
            >
              Farm Selection
            </p>

            <h3
              className="
                text-sm
                font-semibold
                leading-6
                text-[#26351f]
                sm:text-base
              "
            >
              {props.cardTitle}
            </h3>
          </div>

          {/* Arrow */}
          <span
            className="
              mt-1
              text-lg
              text-[#9ba28f]
              transition-all
              duration-300
              group-hover:translate-x-1
              group-hover:text-[#315b20]
            "
          >
            →
          </span>

        </div>

        {/* Animated underline */}
        <div
          className="
            mt-4
            h-px
            w-8
            bg-[#b9c1a5]
            transition-all
            duration-500
            group-hover:w-full
            group-hover:bg-[#6b873f]
          "
        />

      </div>

    </article>
  );
}

export default Catalogue;
