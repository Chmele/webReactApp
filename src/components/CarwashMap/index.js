import "./styles.css";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {Link} from "react-router-dom";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";


export default ({carwashes}) => {
  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
  });
  L.Marker.prototype.options.icon = DefaultIcon;

  return (
    <MapContainer className="map" center={[50.4610058585626, 30.526606870024295]} zoom={13} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {carwashes.map(carwash => {
        let x, y;
        if (carwash.location) {
          [x, y] = carwash.location.slice(1, -1).split(", ");
        }
        else return null;
        return(
        <Marker position={[y, x]}>
          <Popup>
            <Link to={`/carwashes/${carwash.id}`}>
              <img src={carwash.photo} width="80" height="80" alt="Зображення автомийки"></img>
            </Link>
          </Popup>
        </Marker>);
      }
      )}
    </MapContainer>
  );
};
