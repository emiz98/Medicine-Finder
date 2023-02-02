import React, {useMemo, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Tooltip, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import SearchField from './SearchField'


const icon = L.icon({
    iconSize: [35, 35],
    iconAnchor: [10, 20],
    popupAnchor: [2, -40],
    iconUrl:
        '/assets/marker.png',
})

const Map = ({center}) => {
    console.log(center);
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current
                if (marker != null) {
                    console.log(marker.getLatLng())
                }
            },
        }),
        [],
    )

    function Markers() {
        const map = useMap()
        return (
              <Marker
                key={center}
                position={center}
                icon={icon}
              >
              </Marker>
        )
      }

    return (
        <div className='w-full border-2 border-primary rounded-lg select-none'>
            <MapContainer
                key={center}
                center={center}
                zoom={15}
                scrollWheelZoom={true}
                zoomControl={false}
                style={{ height: '10rem', width: '18rem', borderRadius: '10px' }}
            >
                <SearchField/>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Markers />
            </MapContainer>
        </div>
    )
}

export default Map