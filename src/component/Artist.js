import React from 'react';
import { render } from 'react-dom';


const Artist=({artist})=>{
    if(!artist) return null;
const {images,name,followers,genres}=artist;

    return(
        <div>
            <h3>{name}</h3>
            <p>{followers.total} follower</p>
            <p>{genres.join(',')}</p>
            <img 
            src={images[0].url} 
            alt='Profile-image'
            style={{width:200, height:200, borderRadius:100}}/>
        </div>
    )

}
export default Artist;