function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-[calc(100vh-134px)]
        items-center
        overflow-hidden
        border-b
        border-gray-200
        dark:border-gray-800
      "
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.png')",
        }}
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white/40 dark:bg-gray-950/50" />
      {/* Main Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-7xl
          grid-cols-1
          items-center
          gap-12
          px-5
          pb-20
          pt-20

          sm:px-8
          sm:pt-24

          md:px-10
          md:pt-28

          lg:grid-cols-[1.3fr_0.7fr]
          lg:gap-16
          lg:px-12
          lg:pt-20
        "
      >
        {/* ================= LEFT - INTRO ================= */}
        <div
          className="
            group
            w-full
            max-w-3xl
            rounded-2xl
            border-2
            border-gray-200
            bg-white/60
            p-6

            shadow-xl
            shadow-gray-400/10

            backdrop-blur-md

            dark:border-gray-700
            dark:bg-gray-900/70
            dark:shadow-black/20

            sm:p-8
            md:p-10
            lg:p-12
          "
        >
          <h1
            className="
    hero-title
    group/title
    relative
    inline-block
    text-3xl
    font-bold
    leading-tight
    tracking-tight
    text-gray-900
    transition-colors
    duration-500
    hover:text-(--secondary)
    dark:text-white
    dark:hover:text-(--secondary-dark)

    sm:text-5xl
    md:text-6xl
    lg:text-6xl
  "
          >
            Geospatial &{" "}
            <span
              className="
      text-gray-500
      transition-colors
      duration-500
      group-hover/title:text-(--secondary)
      dark:text-gray-400
      dark:group-hover/title:text-(--secondary-dark)
    "
            >
              Web Developer
            </span>
            {/* Animated underline */}
            <span
              className="
      absolute
      -bottom-1.5
      left-0
      h-0.5
      w-0
      rounded-full
      bg-(--secondary)
      transition-all
      duration-500
      ease-out
      group-hover/title:w-full
      dark:bg-(--secondary-dark)
    "
            />
          </h1>

          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-gray-600
              dark:text-gray-300

              sm:text-lg
              sm:leading-8
              md:mt-7
            "
          >
            Hi! I'm Shanika. I combine GIS, spatial analysis, and web
            development to create interactive maps, meaningful visualizations,
            and engaging geospatial applications.
          </p>

          {/* Contact Button */}
          <div className="mt-8 sm:mt-9">
            <a
              href="mailto:your-email@example.com"
              className="
                animated-button
                group
                relative
                inline-flex
                items-center
                gap-2
                overflow-hidden
                rounded-lg
                bg-gray-900
                px-6
                py-3
                text-sm
                font-medium
                text-white

                shadow-lg
                shadow-gray-900/20

                transition-all
                duration-300

                hover:bg-(--secondary)
                hover:shadow-lg
                hover:shadow-(--secondary)/30

                dark:bg-white
                dark:text-gray-900
                dark:hover:bg-(--secondary-dark)
              "
            >
              <span className="relative z-10">Contact Me</span>

              <span
                className="
                  relative
                  z-10
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </a>
          </div>
        </div>

        {/* ================= RIGHT - PROFILE IMAGE ================= */}
        <div
          className="
            flex
            justify-center
            lg:justify-end
          "
        >
          <div
            className="
              animate-float
              flex
              h-56
              w-56
              items-center
              justify-center
              rounded-full

              border-2
              border-gray-200
              bg-gray-50
              p-2

              shadow-xl
              shadow-gray-300/40

              transition-all
              duration-300

              hover:border-(--secondary)
              hover:shadow-[0_8px_30px_rgba(255,93,151,0.25)]

              dark:border-gray-700
              dark:bg-gray-900
              dark:shadow-black/30

              dark:hover:border-(--secondary-dark)
              dark:hover:shadow-[0_8px_30px_rgba(243,166,194,0.22)]

              sm:h-64
              sm:w-64

              md:h-72
              md:w-72

              lg:h-80
              lg:w-80
            "
          >
            <img
              src="/shanika_profile.jpg"
              alt="Shanika Ekanayake"
              className="
                h-full
                w-full
                rounded-full
                object-cover
                dark:opacity-60
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
