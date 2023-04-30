
import '../App.css';

export default function Profile({audioLink, speakerImage}) {
    return (
        <div
        className = "Lesson-Content-Audio">
            <img
                src={speakerImage}
                alt="Speaker"
                width="105" 
                height="100"
            />
        <iframe title="instructionalAudio" src={audioLink} width="450" height="100" allow="autoplay"></iframe>

        </div>
     
    )
  }
  