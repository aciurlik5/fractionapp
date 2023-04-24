
import '../App.css';

export default function Profile({audioLink, speakerImage}) {
    return (
        <div
        className = "Lesson-Content-Audio">
            <img
                src={speakerImage}
                alt="Speaker"
            />
            <audio controls className='Audio-player'>
                <source src={audioLink} type="audio/mpeg"></source>
            </audio>
        </div>
     
    )
  }
  