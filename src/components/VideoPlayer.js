
import '../App.css';

export default function VideoPlayer({videoLink}) {
    return (
        <div>
        <iframe title="fractionVideo" width="550" height="345" src={videoLink}></iframe>
        </div>
     
    )
  }
  