import React,{Component} from 'react';

class Tracks extends Component{
constructor(props)
{
    super(props);
    
    this.state={playing:false,audio:null,playingPreviousUrl:null}
}
   
    playAudio=previewUrl=>()=>
    {
        const audio=new Audio(previewUrl);
        if(!this.state.playing)
        {
        audio.play();
        this.setState({playing:true,audio,playingPreviousUrl:previewUrl});
        }
        else{
            this.state.audio.pause();
            if(this.state.playingPreviousUrl==previewUrl)
            {
                this.setState({playing:false});
            }
            else{
                audio.play();
                this.setState({audio,playingPreviousUrl:previewUrl});
            }
            
        }
    }
    TrackIcon=track=>
    {
        if(!track.preview_url)
        {
            return <span>NA</span>
        }
        if(this.state.playing && this.state.playingPreviousUrl===track.preview_url)
        {
            return <span>| |</span>;
        }
        return <span>&#9654;</span>
    }
   
render()
{ 
    const {tracks}=this.props;
    return(
        <div>
            {
                tracks.map(track=>{
                    const{id,name,album,preview_url}=track;
                    return(
                        <div 
                        key={id} 
                        onClick={this.playAudio(preview_url)} 
                        className="track">
                        
                        <img 
                        src={album.images[0].url} 
                        alt="track-image" 
                        className="track-image"/>
                        
                        <p className="track-text">{name}</p>

                        <p className="track-icon">{this.TrackIcon(track)} </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

}

export default Tracks;