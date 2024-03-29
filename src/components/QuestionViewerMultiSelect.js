
import '../App.css';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { API, } from "aws-amplify";
import {
  createQuestion as createQuestionMutation,
} from "../graphql/mutations";


let guessCount = 1;

export default function QuestionViewerSingleSelect({questions}) {
    // 
    // {{'QuestionText': 'Which fraction is bigger than 1/2', 'QID': 'L1Q', 'CorrectCount:2}, [{'OptionText'; '1/4', 'isCorrect': false}, {'OptionText'; '2/3', 'isCorrect': true}, {'OptionText': '3/4', 'isCorrect': true}]}
    // 
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      
        const [goodOpen, setGoodOpen] = React.useState(false);
        const [badOpen, setBadOpen] = React.useState(false);

        //setBadOpen
        const handleGoodOpen = () => setGoodOpen(true);
        const handleGoodClose = () => setGoodOpen(false);

        const handleBadOpen = () => setBadOpen(true);
        const handleBadClose = () => setBadOpen(false);

    return (
        <div>
            <p>
            {questions[currentQuestion].q.QuestionText}<br></br>
            <img width="500" height="300" src={"https://drive.google.com/uc?export=view&id="+questions[currentQuestion].q.QuestionImageLink} alt="fractionText"></img>
            </p>
            {questions[currentQuestion].a.map(item => {
                return (<><input type="checkbox" id={item.value} name="question" value={item.isCorrect}>
                </input><label for={questions[currentQuestion].q.QID}>{item.OptionText}</label><br></br></>);
             })}
             <button class="Lesson-Content-Button"onClick={() => {
               evaluateAnswer();
            }}>Submit</button>



<Modal
  open={goodOpen}
  onClose={handleGoodClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description">
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
            Good job!
    </Typography>
  </Box>
</Modal>


<Modal
  open={badOpen}
  onClose={handleBadClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description">
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
            Try again please!
    </Typography>
  </Box>
</Modal>



    </div>
     
    )

    function evaluateAnswer(){
        const array = Array.from(document.querySelectorAll("input[type=checkbox]:checked")).map((elem) => [elem.value, elem.id])
        console.log(array);
        let ansSelected = [];
        let isCorrect = true;
        for(let i=0; i<array.length; i++){
          console.log(array);
            ansSelected.push(array[i][1]);
            if(array[i][0] === 'false'){
                isCorrect = false;
            }
        }
        if( array.length !== questions[currentQuestion].q.CorrectCount){
          isCorrect = false;
        }

        //&& array.length === questions[currentQuestion].q.CorrectCount
        const nextQuestion = currentQuestion + 1;
        createQuestion(isCorrect, ansSelected, questions[currentQuestion]);
        if(isCorrect){
            if (nextQuestion < questions.length) {
              guessCount = 1;
                //todo figure out how to clear
                setCurrentQuestion(nextQuestion);
            } 
            handleGoodOpen()
        }
        if(!isCorrect){
            guessCount = guessCount + 1;
            handleBadOpen()
        }
       
    
      
    }



    async function createQuestion(isCorrect, selectedValue, currentQuestion) {
      const data = {
          "QID": currentQuestion.q['QID'],
          "isCorrect": isCorrect,
          "questionText": currentQuestion.q['QuestionText'],
          "answerGiven": selectedValue,
          "correctAnswer": currentQuestion.q.correctAnswer,
          "guessCount": guessCount
        }
        console.log(data);
      await API.graphql({
        query: createQuestionMutation,
        variables: { input: data },
        
      });
  
    }
}
  