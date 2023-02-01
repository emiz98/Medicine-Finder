import React, { useEffect } from 'react'
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch'
import { useMap } from 'react-leaflet'
import 'leaflet-geosearch/dist/geosearch.css'
import L from 'leaflet'

const icon = L.icon({
    iconSize: [35, 35],
    iconAnchor: [10, 20],
    popupAnchor: [2, -40],
    iconUrl: '/assets/marker.png',
})

const SearchField = () => {
    const map = useMap()
    const provider = new OpenStreetMapProvider()
    const searchControl = new GeoSearchControl({
        provider: provider,
        marker: {
            icon: icon,
            draggable: true,
        },
        maxMarkers: 1,
        animateZoom: true,
        retainZoomLevel:true,
        searchLabel: 'Enter pharmacy address',
        popupFormat: ({ query, result }) => {
            console.log(result);
            return result.label;
        },

    });

    useEffect(() => {
        map.addControl(searchControl);
        return () => map.removeControl(searchControl);
    }, []);

    return null;
}

export default SearchField