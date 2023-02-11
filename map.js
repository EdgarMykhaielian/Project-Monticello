/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// Initialize and add the map
function initMap() {
    // The location of New York
    const newYork = { lat: 40.68924574168396, lng: -73.90484872122606 };
    // The map, centered at New York
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: newYork,
      styles: [{
        stylers: [{
          saturation: -100
        }]
      }]
    });
    // The marker, positioned at New York
    // const marker = new google.maps.Marker({
    //   position: newYork,
    //   map: map,
    // });

    // custom marker
    let markerOptions = {
        position: new google.maps.LatLng(40.68924574168396, -73.90484872122606),
        icon: './assets/pin.png',
        animation:google.maps.Animation.BOUNCE,
    }
    let marker = new google.maps.Marker(markerOptions);
    
    marker.setMap(map);

  }
  
  window.initMap = initMap;
  
  