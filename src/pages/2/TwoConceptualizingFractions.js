import '../../App.css';
import AudioPlayer from '../../components/AudioPlayer'
import VideoPlayer from '../../components/VideoPlayer'
import QuestionViewerMultiSelect from '../../components/QuestionViewerMultiSelect'
import {useEffect, useState} from 'react';
import lessonConfig from './OneSession.json'
import heroSpeakerImage from '../../content/BugGirl.png'
import aiSpeakerImage from '../../content/DAI.png'




function LessonTwo() {

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
            Lesson Two: Conceptualizing Fractions
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
     <QuestionViewerMultiSelect
        questions={[{q:{'QuestionText': 'Select all whole numbers', 'QID': 'L1Q', 'CorrectCount': 2}, a:[{'OptionText': '1/2', 'isCorrect': false}, {'OptionText': '50', 'isCorrect': true}, {'OptionText': '.5', 'isCorrect': false},  {'OptionText': '3', 'isCorrect': true}]}, 
        {q:{'QuestionText': 'What number comes directly after four when counting?', 'QID': 'L1Q', 'CorrectCount': 1}, a:[{'OptionText': '5', 'isCorrect': true}, {'OptionText': '6', 'isCorrect': false}, {'OptionText': '3', 'isCorrect': false}]}]}
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



export default LessonTwo;
