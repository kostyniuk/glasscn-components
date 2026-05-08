export function AppBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/liquid-glass-hero.png')] bg-cover bg-center bg-no-repeat dark:bg-[url('/image_dark.png')]" />
      {/* <div className="absolute inset-0 bg-[url('/bg-light.png')] bg-cover bg-center bg-no-repeat dark:bg-[url('/bg-dark.png')]" /> */}

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-[#f0f0f0]/30 dark:bg-[#0a0a0a]/30" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.3] dark:opacity-[0.1]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Technical grid lines */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.06] dark:opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="tech-grid" width="200" height="200" patternUnits="userSpaceOnUse">
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-black dark:text-white"
            />
            <line
              x1="0"
              y1="100"
              x2="200"
              y2="100"
              stroke="currentColor"
              strokeWidth="0.3"
              className="text-black dark:text-white"
            />
            <line
              x1="100"
              y1="0"
              x2="100"
              y2="200"
              stroke="currentColor"
              strokeWidth="0.3"
              className="text-black dark:text-white"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tech-grid)" />
      </svg>

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.05)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
    </div>
  );
}
