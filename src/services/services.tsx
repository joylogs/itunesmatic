

import React from "react";

type Movie = {

    id: string;
    title: string;
    releaseYear: string;

};


//Fetch Top Albums from itunes Api
const getAlbumListFromApi = () => {
    return 
    fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
    .then(response => response.json())
    .then(json => { 
        return json.movies; 
    })
    .catch(error => { 
        console.error(error);
    });
}


const getAlbumListFromApiUsingAsyncAwait = async () => {

    try {
        const response = await fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json');
        const json = await response.json();
        return json.movies;
    } catch (error) {
        console.log(error);
    }

}