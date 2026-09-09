function Checks() {
  return (
    <div className="relative h-12 w-full overflow-hidden bg-white sm:h-14">
      {/* Soft green background */}
      <div className="absolute inset-0 bg-green-50/40" />

      {/* Diagonal check pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(
              45deg,
              transparent 45%,
              #166534 45%,
              #166534 55%,
              transparent 55%
            )
          `,
          backgroundSize: "22px 22px",
        }}
      />

      {/* White mask in the middle */}
      <div className="absolute left-1/2 top-1/2 h-8 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 sm:w-72" />

      {/* Center brand accent */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center">
        {/* Left line */}
        <div className="h-px w-12 bg-green-800/40 sm:w-20" />

        {/* Left dot */}
        <div className="mx-2 h-2 w-2 rounded-full bg-green-700 sm:mx-3" />

        {/* Center diamond */}
        <div className="relative mx-1 h-5 w-5 rotate-45 border-2 border-green-700 bg-white sm:h-6 sm:w-6">
          <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400 sm:h-2.5 sm:w-2.5" />
        </div>

        {/* Right dot */}
        <div className="mx-2 h-2 w-2 rounded-full bg-green-700 sm:mx-3" />

        {/* Right line */}
        <div className="h-px w-12 bg-green-800/40 sm:w-20" />
      </div>

      {/* Bottom soft border */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-green-900/10" />
    </div>
  );
}

export default Checks;
