import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const loader = async () => {
    const environmentVariables = {
      API_URL: process.env.GOOGLE_MAP_API,
    };
    return json({ environmentVariables });
};

const center = {
    lat: -3.745,
    lng: -38.523
  };

const googleMap = () => {
    const data: any = useLoaderData();
    const [map, setMap] = React.useState(null)
    
    const { isLoaded } = useJsApiLoader({
        id: "jnbcx",
        googleMapsApiKey: data.environmentVariables.API_URL,
        libraries: ['drawing'],
    })

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
    
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gradient-to-br from-teal-500 via-blue-500 to-green-300'>
        {isLoaded  ? 
            <GoogleMap
            mapContainerStyle={{ width: '50%', height: '50%' }}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            >
            </GoogleMap> 
            : 
            <></>
        }
    </div>
  );
}

export default googleMap;