import React ,{ Component } from 'react';
import Artist from './Artist';
import Track from './Tracks';
import Search from './Search';
import '../index.css';
import {API_ADDRESS,Default_Artist} from '../constant';
console.log(API_ADDRESS);

class App extends Component{
    state={artist:null ,tracks:[]};
 componentDidMount()
 {
     this.SearchArtist(Default_Artist);
 }
 
SearchArtist=artistQuery=>{

   fetch(`${API_ADDRESS}/artist/${artistQuery}`,{method:'GET'})
   .then(response=>response.json())
   .then(json=>{
       if(json.artists.total>0)
       {
        const artist=json.artists.items[0];
        this.setState({artist});

        fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
        .then(response=>response.json())
        .then(json=>this.setState({tracks:json.tracks}))
        .catch(error=>alert(error.message));
       }
       
     
    fetch(`${API_ADDRESS}/artist/$`)

    })
    .catch(error=>alert(error.message))
}

    render()
    {
        return(
            <div>
               <Search SearchArtist={this.SearchArtist}/>
               <Artist artist={this.state.artist}/>
                <Track tracks={this.state.tracks}/>
            </div>
        ) 
    }
}

export default App;