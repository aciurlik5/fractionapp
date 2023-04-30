import '../../App.css';
import AudioPlayer from '../../components/AudioPlayer'
import VideoPlayer from '../../components/VideoPlayer'
import QuestionViewerSingleSelect from '../../components/QuestionViewerSingleSelect'
import {useEffect, useState} from 'react';
import lessonConfig from './FourSession.json'
import heroSpeakerImage from '../../content/BugGirl.png'
import aiSpeakerImage from '../../content/DAI.png'




function LessonFour() {

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
            Lesson Four: Ordering Fractions
        </p>

    {count === 0 &&
    <><AudioPlayer
                  speakerImage={heroSpeakerImage}
                  audioLink={lessonConfig.AudioLinks[0].Link} />
    <AudioPlayer
                      speakerImage={aiSpeakerImage}
                      audioLink={lessonConfig.AudioLinks[1].Link} /></>
        
    }
    {count === 1 &&
    <div>


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

        Congrats on Mastering Fraction Ordering and Saving the Mayor!
    </div>

    
    }












<div>

{count > 0 && count < 3 &&  
      <div>

      <button
          style={{alignItems: "left", paddingRight: "15px"}}
        className='Lesson-Content-Button-Nav'
         onClick={() => {
          handleClickBack();
            }}>Back</button>


        <button
          style={{alignItems: "right", paddingRight: "15px"}}
        className='Lesson-Content-Button-Nav'
         onClick={() => {
            handleClick();
            }}>Continue</button>

      
        </div>
}

{count === 0 && <div
        style={{textAlign: "left", paddingLeft: "15px"}}
        >
            <button
        className='Lesson-Content-Button-Nav'
         onClick={() => {
            handleClick();
            }}>Continue</button>
        </div>
}


{count === 3 && <div
        style={{textAlign: "left", paddingLeft: "15px"}}
        >
            <button
        className='Lesson-Content-Button-Nav'
         onClick={() => {
            handleClickBack();
            }}>Back</button>
        </div>
}


</div>


</div>
  );
}



export default LessonFour;
