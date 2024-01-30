

import React from "react";

//Fetch Top Albums from itunes Api

const getAlbumListFromApi = () => {
    return 
    fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
    .then(response => response.json())
    .then(json => { return json.movies; })
    .catch(error => { console.error(error);});

}