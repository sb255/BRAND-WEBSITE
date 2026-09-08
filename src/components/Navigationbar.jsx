import groxifiLogo from "../assets/GroxifiLogo.png";


function Navigationbar() {
  return (
    <nav
      className="
        sticky top-0 z-50
        w-full
        border-b border-[#dfe4d7]
        bg-[#f7f8f2]/95
        shadow-[0_4px_24px_rgba(38,53,31,0.06)]
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex h-[72px]
          max-w-7xl
          items-center
          justify-between
          px-5
          sm:px-8
          lg:px-10
        "
      >

        {/* Logo */}
        <a
          href="#"
          className="
            group
            flex items-center
            gap-2
            text-xl
            font-bold
            tracking-[-0.04em]
            text-[#26351f]
          "
        >
        <img
            src={groxifiLogo}
            alt="Groxifi"
            className="
            h-10
            w-auto
            object-contain
            transition-transform
            duration-300
            group-hover:scale-[1.03]
        "
/>

        </a>

        {/* Social Media Links */}
        <div className="flex items-center gap-2">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/groxifi"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-full
              border border-[#d5dccb]
              bg-white/50
              text-[#536448]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#315b20]
              hover:bg-[#315b20]
              hover:text-white
              hover:shadow-md
            "
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              className="h-[17px] w-[17px]"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
              />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.5"
                cy="6.5"
                r="0.8"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@Groxifi"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-full
              border border-[#d5dccb]
              bg-white/50
              text-[#536448]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#315b20]
              hover:bg-[#315b20]
              hover:text-white
              hover:shadow-md
            "
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-[17px] w-[17px]"
            >
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/groxifi.official"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-full
              border border-[#d5dccb]
              bg-white/50
              text-[#536448]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#315b20]
              hover:bg-[#315b20]
              hover:text-white
              hover:shadow-md
            "
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-[17px] w-[17px]"
            >
              <path d="M14 8h3V4h-3c-3.3 0-5 1.7-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.7.3-1 1-1Z" />
            </svg>
          </a>

        </div>

      </div>
    </nav>
  );
}

export default Navigationbar;
