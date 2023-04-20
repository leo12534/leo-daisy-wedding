// Initialize and add the map
let map;

async function initMap() {
  // The location of Sea Cliff Manor
  const position = { lat: 40.83952602547718, lng: -73.65246122436449 };

  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Sea Cliff Manor
  map = new Map(document.getElementById("venue__map"), {
    zoom: 14,
    center: position,
    disableDefaultUI: true,
    mapId: "ac5600de404576a0",

  });



  // The marker, positioned at Sea Cliff Manor
  const svgMarker = {
    // path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    path:"M134 20.5c2.3-1.8 5.1-.6 5.1 2.2a4.3 4.3 0 0 1-5.3 3.7c-2-.7-1.8-4.2.2-5.9ZM5 .6C6.7.5 42.6.2 84.7.1c66.3-.3 76.7-.1 78.8 1.4 1.3 1 9.6 8.3 18.5 16.4 16.5 15 27.8 24.6 31.8 26.9 1.2.6 2.2 1.7 2.6 3 .8 4-27.5 29.2-46.4 41.5l-4.5 3-8.4-1.7c-8.2-1.5-44-2.3-47.4-1-1.2.5-1.5 4-1.1 16.6.3 11.8-.3 21.4-2.1 36.5-2 16.3-2.2 20.8-1.1 22.2 1.1 1.3 1.1 2 0 3.3-1.1 1.3-4 1.7-13.9 1.6-7 0-14.5-.6-17-1.2s-4.9-1.4-5.3-1.8c-.4-.5-.1-8.4.8-17.7 1-9.3 2-26.4 2.4-38.1l.8-21.2-14 .7c-7.6.4-23.2.8-34.6 1-24.2.2-22.3 1.3-22.4-14.3 0-5.5-.7-22.7-1.5-38.2C0 20.8-.3 9.1.6 5.8 1.4 1.3 1.8.8 4.9.6Zm75.3 89.7c-1.9.4-2 2-1.9 17.8.1 9.6-.6 25.3-1.5 34.8-2 21.4-2 20.3 0 20.3 1.3 0 1.7-1.8 1.7-8.8 0-4.7.5-12.8 1-17.9.6-5 1.4-17.6 1.9-28 .7-17.4.6-18.6-1.2-18.2Zm22.2 10.2-.7-10.4H87.4v12.1c0 6.6-.8 19.6-1.7 29-.9 9.2-1.6 20.5-1.6 25v8h6.7c5.1 0 6.8-.3 6.8-1.5 0-1 .7-7.4 1.6-14.4 3-23.2 4-37.3 3.2-47.8Zm-83-91.7c.3.9 1.1 13 1.8 27.1L23 73.1l.6 11.7 12.6-.7c6.8-.4 39.3-1 72-1.3l59.5-.7 10.7-7.7A223.6 223.6 0 0 0 207.3 50c0-.5-4.2-4.6-9.6-9.1a555.7 555.7 0 0 1-23.2-21.4L161 6.3l-71.1.5c-60 .4-71 .7-70.5 2ZM7 7l.7 16c.4 8.8 1.2 26.3 1.6 38.8l1 22.7h5.5l-.7-10.4c-.4-5.7-1-23.1-1.5-38.7L13 7Zm20.2 43.3c-1.6-2.3-1.6-3.7-.6-8.8C28.3 33.8 34 25 37 25s2.9 2.2-.5 8.8a44.1 44.1 0 0 0-3.5 9.8c-.7 4-.6 4.2 1 2.7 1.5-1.7 2.8-3.6 3.9-5.6 1.3-2.4 3-4 4.3-4 1.7 0 2 .8 2 4.3-.1 2.3.2 4.2.6 4.2.6 0 7.7-10.5 11.3-16.7 1.3-2.3 3.4-.4 3.4 3 0 2.9.1 2.8 2.7-1.5 3.2-5.3 7.6-7.8 10.7-6.2 5 2.7 3.3 9-3.6 13.5-4.3 2.7-5.3 5.3-3 7.6 2 2 5.3.3 6.6-3.5 2.5-7.5 11.7-16.4 17-16.4 1 0 2.7-2 3.8-4.4 2.3-5 4.8-6.4 7.2-4 1.5 1.4 1.2 2.7-2.5 10.8-2.4 5.1-4.5 11-4.8 13.3l-.5 4 1.9-3.4c4-7.2 10-11.8 15.6-11.8 1.5 0 2.8-.5 2.8-1.1 0-.6 1.3-3.2 2.9-5.6 2.9-4.7 6.7-6 8-2.7.6 1.8-.3 3.9-6.5 15-2 3.5-2.9 6.3-2.2 6.5 1.9.7 8.8-4.2 10.9-7.7 2-3.4 4.4-4.8 6.2-3.7 1.3.8.8 3.9-1.8 9.8-3.2 7.3 3.6 2 7.3-5.7 2.3-4.6 2.8-5 5.8-4.4 1.8.4 3.7.2 5.4-.4 1.4-.9 3-.8 4.4 0 4.1 2.2 2 13.8-3.9 20.8-1.8 2.1-1.8 2-1.3-4 .2-2.8.7-5.6 1.4-8.4 1.1-3.1-5.7 3.3-8.8 8.3-1.9 3-2.8 3.6-5.2 3.2a8.9 8.9 0 0 0-5 .5c-2.7 1.4-6.1.2-7-2.4-.6-2-.8-2.1-4.6-.3-3.1 1.5-4.5 1.6-7.3.6-3-1.1-3.9-1-7.5 1.5-2.7 1.8-4.8 2.5-6.4 2-1.6-.5-3.4-.8-5.1-1-4.4-.4-5.6-1.5-5.6-5.4v-3.5L83.7 45c-3 3-4.5 3.6-8.2 3.4a25 25 0 0 0-7.2.6c-4 1.2-9-3-9-7.4s-1.3-3.7-6.5 3c-5 6.7-9.2 9.1-12.5 7.4a4 4 0 0 0-4.5-.1c-3.5 2-6.6 1.3-8.5-1.6Zm74.6-6.1a23 23 0 0 0 4.6-4.2c1.3-1.7 2-3.3 1.7-3.6-.7-.7-6 4.1-7.5 7-1 1.7-.8 1.8 1.2.8Zm-20-6.9c-.8 1.3-1 2.3-.7 2.3.3 0 1.1-1 1.7-2.3.7-1.2 1-2.2.7-2.2-.3 0-1.1 1-1.8 2.2Zm83.7-4.3c4-1.1 11 1 11.4 3.5.5 2.1-7.2 17.6-11.9 24-7.5 10.4-21.3 12.5-44 6.8-17.5-4.4-26.6-5-38.1-2a93 93 0 0 0-12.6 4.2c-1.8.9-3.2 1.1-3.2.6 0-1.8 8.1-8.3 13.4-10.7 8-3.7 23.5-3.2 42.4 1.4 16.9 4 23.7 4.4 30.3 1.4 3.8-1.8 9.4-7.4 9.4-9.5 0-.2-1.5-.8-3.3-1.1-8.4-1.7-3.6-15.8 6.2-18.6Zm.6 9.9c1.8-1.3 3.2-2.8 3.2-3.4 0-1.6-6.3 2-7 4-1 2.3-.1 2.1 3.8-.6Zm30 4.8a4.5 4.5 0 0 1-7.6 1.5c-1.8-2.1-1-6.4 1.3-7.8 2.2-1.4 6.5 1.8 6.5 4.9 0 .5 0 1-.2 1.4Z",
    fillColor: 'black',
    fillOpacity: 0.8,
    strokeWeight: 0,
    rotation: 0,
    scale: .29,
    anchor: new google.maps.Point(75, 200),
  };

  new google.maps.Marker({
    position: position,
    title:'Sea Cliff Manor',
    // icon: svgMarker,
    map: map,
  });


  // Center Change Stuff
    map.addListener("center_changed", () => {
      // 3 seconds after the center of the map has changed, pan back to the
      // marker.
      window.setTimeout(() => {
        map.panTo(position);
      }, 3000);
    });


  //




}

initMap();
