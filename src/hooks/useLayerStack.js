import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";
import VectorLayer from "ol/layer/Vector";
import { Fill, Stroke, Style } from "ol/style";
export default function (mapInstance) {
    const vectorSource = new VectorSource({
        url: "https://geo.datav.aliyun.com/areas_v3/bound/330000.json",
        format: new GeoJSON(),
    });
    for (let i = 1; i <= 3; i++) {
        const layer = new VectorLayer({
            zIndex: -1,
            source: vectorSource,
            style: (feature) => {
                const geometry = feature.getGeometry().clone();
                geometry.translate(0, -0.04 * i);
                return new Style({
                    fill: new Fill({
                        color: "rgba(176, 166, 132,0.6)",
                    }),
                    stroke: new Stroke({
                        color: "rgba(176, 166, 132,0.6)",
                        width: 1,
                    }),
                    geometry,
                });
            },
        });
        mapInstance.addLayer(layer);
    }
}
