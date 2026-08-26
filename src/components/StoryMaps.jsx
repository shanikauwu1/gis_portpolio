function StoryMaps() {
  return (
    <section
      id="storymaps"
      className="
        border-b border-gray-200
        bg-white
        px-6 py-20
        text-gray-900
        dark:border-gray-800
        dark:bg-gray-950
        dark:text-white
      "
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-md font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-200">
            Story Maps
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Interactive GIS Storytelling
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200 text-lg">
            Explore interactive maps, spatial analysis, and geospatial
            storytelling through my ArcGIS StoryMaps projects.
          </p>
        </div>

        {/* Video */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-lg dark:border-gray-800 dark:bg-gray-900">
          <div className="aspect-video">
            <iframe
              src="https://storymaps.arcgis.com/stories/557ba8955a7a4ff6912c8975b2eaefef"
              width="100%"
              height="500px"
              frameborder="0"
              allowfullscreen
              allow="geolocation"
            ></iframe>
          </div>
        </div>

        {/* Button */}
        <div className="mt-8 text-center">
          <a
            href="https://arcg.is/1jKCvW1"
            target="_blank"
            rel="noopener noreferrer"
            className="
    animated-button
    group
    relative
    inline-flex
    items-center
    gap-2
    overflow-hidden
    rounded-md
    bg-gray-900
    px-5
    py-2
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
            View Story Map
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default StoryMaps;
