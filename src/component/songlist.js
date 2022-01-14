import React, { Componen,useState } from 'react';

const Songlist = () => {
    const [songs , setsong]=  useState([
        {title: 'music one', id: 1},
        {title: 'music two', id: 2},
        {title: 'music three', id: 3}
    ])
    return (  
        <ul>
           {songs.map(song =><li key={song.id}>{song.title}</li>)}
        </ul>
    );
}
 
export default Songlist;
