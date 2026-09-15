import { useEffect, useRef, useState } from "react";
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
        (item) => item.title === "Calgary_Rooftop_Solar_Potential",
      );

      if (!parentLayer) {
        console.error("Parent layer not found");
        return;
      }

      await parentLayer.load();

      console.log("Parent layer type:", parentLayer.type);
      console.log(
        "Child layers:",
        parentLayer.layers
          ?.map((l) => ({ id: l.id, title: l.title, type: l.type }))
          .toArray(),
      );

      const solarLayer = parentLayer.layers?.find(
        (l) => l.title === "Neighborhood Solar Potencial Categaries",
      );

      if (!solarLayer) {
        console.error("Solar child layer not found");
        return;
      }

      setLayer(solarLayer);

      try {
        await solarLayer.load();

        const result = await solarLayer.queryFeatures({
          where: "1=1",
          outStatistics: [
            {
              statisticType: "min",
              onStatisticField: "MEAN",
              outStatisticFieldName: "minimum",
            },
            {
              statisticType: "max",
              onStatisticField: "MEAN",
              outStatisticFieldName: "maximum",
            },
          ],
          returnGeometry: false,
        });

        console.log("Query result:", result);

        const statistics = result.features[0]?.attributes;

        if (statistics) {
          setMinValue(statistics.minimum);
          setMaxValue(statistics.maximum);
          setSelectedValue(statistics.minimum);
        }
      } catch (error) {
        console.error("Solar statistics error:", error);
      }
    };
    mapElement?.addEventListener("arcgisViewReadyChange", handleViewReady);

    return () => {
      mapElement?.removeEventListener("arcgisViewReadyChange", handleViewReady);
    };
  }, []);

  const handleSolarFilter = (event) => {
    const value = Number(event.target.value);
    setSelectedValue(value);

    if (layer) {
      layer.definitionExpression = `MEAN >= ${value}`;
    }
  };

  const resetFilter = () => {
    setSelectedValue(minValue);

    if (layer) {
      layer.definitionExpression = "1=1";
    }
  };

  return (
    <div className="relative h-full w-full">
      <arcgis-map
        ref={arcgisMapRef}
        item-id="3280b93d728e472ab8ac0aa2491dae0f"
        center="-114.0719, 51.0447"
        zoom="10"
        className="block h-full w-full"
      >
        <arcgis-search slot="top-right"></arcgis-search>
        <arcgis-home slot="top-left"></arcgis-home>
        <arcgis-zoom slot="top-left"></arcgis-zoom>

        <arcgis-expand
          slot="top-right"
          expand-icon="layers"
          expand-tooltip="Layers"
        >
          <arcgis-layer-list></arcgis-layer-list>
        </arcgis-expand>

        <arcgis-expand
          slot="bottom-left"
          expand-icon="legend"
          expand-tooltip="Legend"
          expanded
        >
          <arcgis-legend></arcgis-legend>
        </arcgis-expand>

        <arcgis-scale-bar slot="bottom-right" unit="metric"></arcgis-scale-bar>
      </arcgis-map>

      <div className="absolute right-5 top-5 z-10 w-72 rounded-xl border border-gray-200 bg-white/95 p-5 shadow-lg backdrop-blur dark:border-gray-700 dark:bg-gray-900/95">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
          Solar Potential
        </h3>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          Filter neighbourhoods by mean solar potential.
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Minimum MEAN
          </span>
          <span className="font-semibold text-(--secondary) dark:text-(--secondary-dark)">
            {selectedValue.toFixed(2)}
          </span>
        </div>

        <input
          type="range"
          min={minValue}
          max={maxValue}
          step="0.01"
          value={selectedValue}
          onChange={handleSolarFilter}
          className="mt-3 w-full accent-(--secondary)"
        />

        <div className="mt-2 flex justify-between text-xs text-gray-400">
          <span>{minValue.toFixed(2)}</span>
          <span>{maxValue.toFixed(2)}</span>
        </div>

        <button
          type="button"
          onClick={resetFilter}
          className="mt-4 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          Reset Filter
        </button>
      </div>
    </div>
  );
}

export default SolarMap;
