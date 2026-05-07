import { useEffect, useState } from "react";
import "./App.css";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";
import MarkerIcon from "./assets/markerIcon.svg";

const DEFAULT_LOCATION = { lat: 37.582, lng: 127.011 };
const INITIAL_STATUS = "현재 위치를 불러옵니다.";
const UNSUPPORTED_STATUS = "기본 위치를 보여주고 있어요.";

function App() {
  const [center, setCenter] = useState(DEFAULT_LOCATION);
  const [markers, setMarkers] = useState([]);
  const [selectedMarkerId, setSelectedMarkerId] = useState(null);
  const [locationStatus, setLocationStatus] = useState(() => {
    if (typeof navigator === "undefined") {
      return INITIAL_STATUS;
    }

    return navigator.geolocation ? INITIAL_STATUS : UNSUPPORTED_STATUS;
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      return;
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setCenter({ lat: coords.latitude, lng: coords.longitude });
      },
      () => {
        setLocationStatus("기본 위치를 중심으로 보여주고 있어요.");
      },
      {
        enableHighAccuracy: true,
      },
    );
  }, []);

  const handleMapClick = (_, mouseEvent) => {
    const latlng = mouseEvent.latLng;
    const newMarker = {
      id: Date.now(),
      position: {
        lat: latlng.getLat(),
        lng: latlng.getLng(),
      },
      title: `${markers.length + 1}번째 마커`,
    };

    setMarkers((prev) => [...prev, newMarker]);
    setSelectedMarkerId(newMarker.id);
  };

  const selectedMarker = markers.find(
    (marker) => marker.id === selectedMarkerId,
  );

  return (
    <div className="container">
      <div className="mapHeader">
        <div>
          <h1>나만의 장소 지도</h1>
          <p>{locationStatus}</p>
        </div>
        <span className="markerCount">등록된 마커 {markers.length}개</span>
      </div>

      <Map center={center} className="map" level={3} onClick={handleMapClick}>
        {markers.map((marker) => (
          <MapMarker
            key={marker.id}
            position={marker.position}
            image={{ src: MarkerIcon, size: { width: 30, height: 40 } }}
            onClick={() => setSelectedMarkerId(marker.id)}
          />
        ))}

        {selectedMarker && (
          <CustomOverlayMap position={selectedMarker.position} yAnchor={1.8}>
            <div className="overlayCard">
              <div className="overlayHeader">
                <strong>{selectedMarker.title}입니다</strong>
                <button type="button" onClick={() => setSelectedMarkerId(null)}>
                  X
                </button>
              </div>
              <p>{selectedMarker.description}</p>
            </div>
          </CustomOverlayMap>
        )}
      </Map>
    </div>
  );
}

export default App;
