import { useEffect, useRef } from "react";
import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";

function SolarMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    const webmap = new WebMap({
      portalItem: {
        id: "3280b93d728e472ab8ac0aa2491dae0f",
      },
    });

    const view = new MapView({
      container: mapRef.current,
      map: webmap,
      center: [-114.0719, 51.0447],
      zoom: 10,
    });

    return () => {
      view.destroy();
    };
  }, []);

  return <div ref={mapRef} className="h-full w-full" />;
}

export default SolarMap;
