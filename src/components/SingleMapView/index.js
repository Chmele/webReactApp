import "./styles.css";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";


export default ({carwash}) => {

  let DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow
  });
  L.Marker.prototype.options.icon = DefaultIcon;

  let x, y;
  if (carwash.location){
    [x, y] = carwash.location.slice(1, -1).split(", ");
  }
  else [x, y] =  [30.526606870024295, 50.4610058585626];

  return (
    <MapContainer className="single-map" center={[y, x]} zoom={13} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[y, x]}>
        <Popup>
          <img src={carwash.photo} width="80" height="80" alt="Зображення автомийки"></img>
        </Popup>
      </Marker>
    </MapContainer>
  );
};
