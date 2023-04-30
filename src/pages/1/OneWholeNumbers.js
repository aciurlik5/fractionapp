import '../../App.css';
import AudioPlayer from '../../components/AudioPlayer'
import VideoPlayer from '../../components/VideoPlayer'
import QuestionViewerSingleSelect from '../../components/QuestionViewerSingleSelect'
import {useEffect, useState} from 'react';
import lessonConfig from './OneSession.json'
import heroSpeakerImage from '../../content/BugGirl.png'
import aiSpeakerImage from '../../content/DAI.png'




function LessonOne() {

    const [count, setCount] = useState(0);

    useEffect(() => {
      }, [count]);
    
      const handleClick  = event => {
        setCount(count + 1);
      };

      const handleClickBack  = event => {
        setCount(count - 1);
      };

  return (
    <div style={{ padding : "20px"}} className="Lesson-Content-Text">
        <p>
            Lesson One: Whole Numbers
        </p>

    {count === 0 &&
    <AudioPlayer
      speakerImage={heroSpeakerImage}
      audioLink={lessonConfig.AudioLinks[0].Link}/>
        
    }
    {count === 1 &&
    <div>
    <AudioPlayer
           speakerImage={aiSpeakerImage}
      audioLink={lessonConfig.AudioLinks[1].Link}/>

<div>
    <VideoPlayer
    videoLink={lessonConfig.VideoLink}/>      
</div>
      

    </div> 
}

    {count ===2 &&
     <QuestionViewerSingleSelect
        questions={lessonConfig.Questions}
        /> 
    }  


{count === 3 &&
<div>
         
<AudioPlayer
      speakerImage={heroSpeakerImage}
      audioLink={lessonConfig.AudioLinks[2].Link}/>
        <br></br>

        Congrats on Mastering Whole Numbers!
    </div>

    
    }











<div>

{count < 3 && <div
        style={{textAlign: "right", paddingRight: "15px"}}
        >
            <button
        className='Lesson-Content-Button'
         onClick={() => {
            handleClick();
            }}>Continue</button>
        </div>
}

{count > 0 && <div
        style={{textAlign: "left", paddingLeft: "15px"}}
        >
            <button
        className='Lesson-Content-Button'
         onClick={() => {
            handleClickBack();
            }}>Back</button>
        </div>
}


</div>


</div>
  );
}



export default LessonOne;
