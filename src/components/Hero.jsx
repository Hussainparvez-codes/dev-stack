import banner from "../assets/banner-stack.png";

function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">

          {/* Left Content */}
          <div className="max-w-xl">

            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Build Your{" "}
              <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                Ideal
              </span>
              <br />

              <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-6 text-gray-600">
              Explore frontend, backend, database, and tooling options,
              <br/>
              compare them side by side and put together the stack that fits
              <br/> 
              your next project.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex items-center gap-3">

              <a
                href="#technologies"
                className="rounded-lg bg-gradient-to-r from-orange-400 via-pink-500 to-violet-600 px-4 py-2.5 text-xs font-semibold text-white transition hover:scale-105"
              >
                Explore Technologies
              </a>

              <a
                href="#about"
                className="rounded-lg border border-gray-300 px-5 py-2.5 text-xs font-medium text-gray-700 transition hover:border-pink-400 hover:text-pink-500"
              >
                Learn More
              </a>

            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={banner}
              alt="Development Stack"
              className="h-auto w-full max-w-[380px] object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;