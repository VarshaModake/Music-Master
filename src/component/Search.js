import React,{Component} from 'react';

class Search extends Component{
    state={artistQuery:''};
    UpdateArtistQuery =event=>{
        this.setState({artistQuery:event.target.value});
      }
      HandleKey=event=>{
        if(event.key=='Enter')
        {
            this.SearchArtist();
        }
        }
        SearchArtist=()=>{
                this.props.SearchArtist(this.state.artistQuery);
      }
render()
{
    return(
        <div>
            <h1>Music Master</h1>
       
        <div className="form-inline">
          
               <input className="form-control"
               placeholder="Search for an Artist" 
               onChange={this.UpdateArtistQuery}
               onKeyPress={this.HandleKey}
               />
               <button className="btn btn-primary" onClick={this.SearchArtist}>Search</button>  
        </div>
        </div>
    )
}
}
export default Search;