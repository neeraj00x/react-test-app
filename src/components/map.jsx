import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

function Map(props) {
    return (
        <div id='map'>
            <div className='mapLeftSpace'></div>
            <MapContainer center={[props.item.location.coordinates.latitude, props.item.location.coordinates.longitude]} zoom={1} scrollWheelZoom={false}>

                <TileLayer
                    //   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[props.item.location.coordinates.latitude, props.item.location.coordinates.longitude]} icon={icon}>
                    <Popup>
                        User's current location
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default Map;

const icon = L.icon({ iconUrl: "/marker-icon.png" });