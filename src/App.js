// import logo from './logo.svg';
import './App.css';
import AudioPlayer from './components/AudioPlayer'
// eslint-disable-next-line no-unused-vars
import VideoPlayer from './components/VideoPlayer'
import QuestionViewerSingleSelect from './components/QuestionViewerSingleSelect'
import QuestionViewerMultiSelect from './components/QuestionViewerMultiSelect';
import LessonOne from './pages/1/OneWholeNumbers';
import Aggregate from './pages/Aggregate/Aggregate';

import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
} from "@aws-amplify/ui-react";




// function App() {
//   return (
//     <div className="App">
//       <LessonOne/>
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Under Construction

//         </p>
    
//       </header> */}
//       {/* <AudioPlayer
//       speakerImage='https://gt-final-resources.s3.us-east-1.amazonaws.com/BugBoy.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJGMEQCIFs6z%2B13a2DedPp1SE%2BrpiAphzV%2Fak2xf8Z4vn700xniAiBNZIQtQEciYNuWXgvpSeW3MVHUIsXGyHjKKkr5EN%2FQ6yrtAgiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAIaDDY4OTM0NDE5MzQ4NCIMMrlB2ZHvzmWW5XFOKsEC%2FhRfHWK0h0RaGeznWRcouQ5uqvGeYEJs6z23Wz7XkG54%2FP4XeGAYLWVMd9BzNjayncrLRUTnkuM4icoIW1MOVyFAArFpVZNX8tSiUwN%2FqqM3Akcy0UpAkFcOsXhikgGcQBJtetk8Dy4TnAU2uh1GHfQBjHVtYkJk9zdFRpua8CR5oM7q0lAkgZZzt%2FFqxpmrSQNkWjlzcXTbzDhWHOJGbaRj1i6Nv%2FcFqAxDcEumrZwDxoe34ErATfp9qwIg2lu5dVwBEPc9d2l2feWoLAwDzTPpd7ofoHIn05hNjv3XLPSgBmiYFS1d5i9RBNg5jPudze0%2F4ig0nIQkZoSFrJaE53HFOGmtz5G6N8vjN6iLCZNq1QIILDUGP%2FfEPHRG352iOXEhJGJI5Mmg9y5jT8ogOMP1s6q6iCuoedo7HrGalnthMLCMzqEGOrQC14Khs5eP1Ig75YGvSumbXbzmbJ9tEAGAJF3k2aYIufgpfTcRo8jatoutiEe4AhPVLBuVfKVv2mmJaiVFFqs%2FnVwFSkasPO1wDaqZRUKZLYko4Bva4Z%2FsN98m2Wt7qmHBd2vAvB8mVos9EKS9cbXFeUoWsNHnz6oqFBLVkryXueYz5l8Wp1M0hEsF%2BCQUCGRrGpCdYhajrCLXmNNyWpdvlR8DujeJkuFZqWBfPBTeo8Fok2BaX7kLGLrB92ZUKtMCpiXufmRsJhE4ENFFPGJh0EJoSFU506URDW2Fv6b62SNJ1ENd2mu4y%2FZd%2BBUkYKySkk1JzUCZv7HUdzADetrG8jilyxqcZPd4PQLOu9NZ2TbtoPDQ5wkn%2BgqK%2B2lMFracArbdCtQjeb383DA2XSrbd2lZXdM%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230410T034823Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA2BAA5UPGAWV7PPQC%2F20230410%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=26d4b22bd99993f9af8ecff6a1b8e8ad4eb974afabeeb03d3b36435b7966d7bf'
//       audioLink='https://gt-tech-ed-fraction.s3.amazonaws.com/e461f867-b369-4098-a1fe-ee8278e02025.mp3'/>
//       <QuestionViewerSingleSelect
//       questions={[{q:{'QuestionText': 'Which fraction is bigger than 1/2', 'QID': 'L1Q'}, a:[{'OptionText': '1/4', 'isCorrect': false}, {'OptionText': '2/3', 'isCorrect': true}]}, 
//                   {q:{'QuestionText': 'Which fraction is bigger than 1/3', 'QID': 'L1Q'}, a:[{'OptionText': '1/8', 'isCorrect': false}, {'OptionText': '3/3', 'isCorrect': true}]}]}
//       />

// <QuestionViewerMultiSelect
//         questions={[{q:{'QuestionText': 'Which fraction is bigger than 1/2', 'QID': 'L1Q', 'CorrectCount': 1}, a:[{'OptionText': '1/4', 'isCorrect': false}, {'OptionText': '2/3', 'isCorrect': true}]}, 
//         {q:{'QuestionText': 'Which fraction is bigger than 1/3', 'QID': 'L1Q', 'CorrectCount': 2}, a:[{'OptionText': '8/8', 'isCorrect': true}, {'OptionText': '3/3', 'isCorrect': true}]}]}
//         /> */}


//       <Aggregate/>
//     </div>
//   );
// }

// export default App;



function App({ signOut }) {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Under Construction

        </p>
    
      </header>
      <LessonOne/>
      {/* <AudioPlayer
      speakerImage='https://gt-final-resources.s3.us-east-1.amazonaws.com/BugBoy.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJGMEQCIFs6z%2B13a2DedPp1SE%2BrpiAphzV%2Fak2xf8Z4vn700xniAiBNZIQtQEciYNuWXgvpSeW3MVHUIsXGyHjKKkr5EN%2FQ6yrtAgiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAIaDDY4OTM0NDE5MzQ4NCIMMrlB2ZHvzmWW5XFOKsEC%2FhRfHWK0h0RaGeznWRcouQ5uqvGeYEJs6z23Wz7XkG54%2FP4XeGAYLWVMd9BzNjayncrLRUTnkuM4icoIW1MOVyFAArFpVZNX8tSiUwN%2FqqM3Akcy0UpAkFcOsXhikgGcQBJtetk8Dy4TnAU2uh1GHfQBjHVtYkJk9zdFRpua8CR5oM7q0lAkgZZzt%2FFqxpmrSQNkWjlzcXTbzDhWHOJGbaRj1i6Nv%2FcFqAxDcEumrZwDxoe34ErATfp9qwIg2lu5dVwBEPc9d2l2feWoLAwDzTPpd7ofoHIn05hNjv3XLPSgBmiYFS1d5i9RBNg5jPudze0%2F4ig0nIQkZoSFrJaE53HFOGmtz5G6N8vjN6iLCZNq1QIILDUGP%2FfEPHRG352iOXEhJGJI5Mmg9y5jT8ogOMP1s6q6iCuoedo7HrGalnthMLCMzqEGOrQC14Khs5eP1Ig75YGvSumbXbzmbJ9tEAGAJF3k2aYIufgpfTcRo8jatoutiEe4AhPVLBuVfKVv2mmJaiVFFqs%2FnVwFSkasPO1wDaqZRUKZLYko4Bva4Z%2FsN98m2Wt7qmHBd2vAvB8mVos9EKS9cbXFeUoWsNHnz6oqFBLVkryXueYz5l8Wp1M0hEsF%2BCQUCGRrGpCdYhajrCLXmNNyWpdvlR8DujeJkuFZqWBfPBTeo8Fok2BaX7kLGLrB92ZUKtMCpiXufmRsJhE4ENFFPGJh0EJoSFU506URDW2Fv6b62SNJ1ENd2mu4y%2FZd%2BBUkYKySkk1JzUCZv7HUdzADetrG8jilyxqcZPd4PQLOu9NZ2TbtoPDQ5wkn%2BgqK%2B2lMFracArbdCtQjeb383DA2XSrbd2lZXdM%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230410T034823Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA2BAA5UPGAWV7PPQC%2F20230410%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=26d4b22bd99993f9af8ecff6a1b8e8ad4eb974afabeeb03d3b36435b7966d7bf'
      audioLink='https://gt-tech-ed-fraction.s3.amazonaws.com/e461f867-b369-4098-a1fe-ee8278e02025.mp3'/>
      <QuestionViewerSingleSelect
      questions={[{q:{'QuestionText': 'Which fraction is bigger than 1/2', 'QID': 'L1Q'}, a:[{'OptionText': '1/4', 'isCorrect': false}, {'OptionText': '2/3', 'isCorrect': true}]}, 
                  {q:{'QuestionText': 'Which fraction is bigger than 1/3', 'QID': 'L1Q'}, a:[{'OptionText': '1/8', 'isCorrect': false}, {'OptionText': '3/3', 'isCorrect': true}]}]}
      /> */}
{/* 
<QuestionViewerMultiSelect
        questions={[{q:{'QuestionText': 'Which fraction is bigger than 1/2', 'QID': 'L1Q', 'CorrectCount': 1}, a:[{'OptionText': '1/4', 'isCorrect': false}, {'OptionText': '2/3', 'isCorrect': true}]}, 
        {q:{'QuestionText': 'Which fraction is bigger than 1/3', 'QID': 'L1Q', 'CorrectCount': 2}, a:[{'OptionText': '8/8', 'isCorrect': true}, {'OptionText': '3/3', 'isCorrect': true}]}]}
        /> */}


      <Aggregate/>
    </div>
  );
}

export default withAuthenticator(App);
