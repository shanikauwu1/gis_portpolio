import SolarMap from "../components/SolarMap";
import CodeShowcase from "../components/CodeShowcase";

function SolarProject() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <span
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.2em]
            text-(--secondary)
            dark:text-(--secondary-dark)
          "
        >
          ArcGIS Maps SDK for JavaScript
        </span>

        <h1
          className="
            mt-4
            text-4xl
            font-bold
            tracking-tight
            text-gray-900
            dark:text-white
            md:text-6xl
          "
        >
          Residential Solar Energy Analysis
        </h1>

        <p
          className="
            mt-5
            max-w-3xl
            text-lg
            leading-8
            text-gray-600
            dark:text-gray-400
          "
        >
          An interactive Web GIS application for exploring residential rooftop
          solar potential across Calgary, Alberta.
        </p>
      </section>

      {/* Interactive ArcGIS Map */}
      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <div
          className="
            h-[650px]
            overflow-hidden
            rounded-2xl
            border
            border-gray-200
            bg-gray-100
            shadow-xl
            dark:border-gray-800
            dark:bg-gray-900
          "
        >
          <SolarMap />
        </div>

        <CodeShowcase
          title="SolarMap.jsx"
          code={`import { useEffect, useRef, useState } from "react";
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-search";
import "@arcgis/map-components/components/arcgis-home";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/map-components/components/arcgis-expand";
import "@arcgis/map-components/components/arcgis-layer-list";
import "@arcgis/map-components/components/arcgis-legend";
import "@arcgis/map-components/components/arcgis-scale-bar";

function SolarMap() {
  const arcgisMapRef = useRef(null);
  const [layer, setLayer] = useState(null);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10);
  const [selectedValue, setSelectedValue] = useState(0);

  useEffect(() => {
    const mapElement = arcgisMapRef.current;

    const handleViewReady = async () => {
      const map = mapElement?.map;
      if (!map) return;

      await map.loadAll();

      const parentLayer = map.allLayers.find(
        (item) => item.title === "Calgary_Rooftop_Solar_Potential"
      );

      if (!parentLayer) return;

      await parentLayer.load();

      const solarLayer = parentLayer.layers?.find(
        (l) =>
          l.title ===
          "Neighborhood Solar Potencial Categaries"
      );

      if (!solarLayer) return;

      setLayer(solarLayer);

      await solarLayer.load();

      const result = await solarLayer.queryFeatures({
        where: "1=1",
        outStatistics: [
          {
            statisticType: "min",
            onStatisticField: "MEAN",
            outStatisticFieldName: "minimum"
          },
          {
            statisticType: "max",
            onStatisticField: "MEAN",
            outStatisticFieldName: "maximum"
          }
        ],
        returnGeometry: false
      });

      const statistics =
        result.features[0]?.attributes;

      if (statistics) {
        setMinValue(statistics.minimum);
        setMaxValue(statistics.maximum);
        setSelectedValue(statistics.minimum);
      }
    };

    mapElement?.addEventListener(
      "arcgisViewReadyChange",
      handleViewReady
    );

    return () => {
      mapElement?.removeEventListener(
        "arcgisViewReadyChange",
        handleViewReady
      );
    };
  }, []);

  const handleSolarFilter = (event) => {
    const value = Number(event.target.value);

    setSelectedValue(value);

    if (layer) {
      layer.definitionExpression =
        \`MEAN >= \${value}\`;
    }
  };

  return (
    <div className="relative h-full w-full">
      <arcgis-map
        ref={arcgisMapRef}
        item-id="3280b93d728e472ab8ac0aa2491dae0f"
        center="-114.0719, 51.0447"
        zoom="10"
      >
      </arcgis-map>
    </div>
  );
}

export default SolarMap;`}
        />
      </section>
    </main>
  );
}

export default SolarProject;
