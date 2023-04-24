
import '../App.css';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


export default function QuestionViewerSingleSelect({questions}) {

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

    // 
    // [
    // {q:{'QuestionText': 'Which fraction is bigger than 1/2', 'QID': 'L1Q'}, a:[{'OptionText'; '1/4', 'isCorrect': false}, {'OptionText'; '2/3', 'isCorrect': true}]},
    // {q:{'QuestionText': 'Which fraction is bigger than 1/3', 'QID': 'L1Q'}, a:[{'OptionText'; '1/4', 'isCorrect': false}, {'OptionText'; '2/3', 'isCorrect': true}]}
    // ]
    // 
    return (
        <div>
            <p>
            {questions[currentQuestion].q.QuestionText}<br></br>
            </p>
            {questions[currentQuestion].a.map(item => {
                return (<><input type="radio" id={item.OptionText} name="question" value={item.isCorrect}>
                </input><label for={questions[currentQuestion].q.QID}>{item.OptionText}</label><br></br></>);
             })}
             <button onClick={() => {
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
        console.log('doing')
        var getSelectedValue = document.querySelector(   
            'input[name="question"]:checked');   
        console.log(getSelectedValue.value);
        if(getSelectedValue.value === 'true'){
            handleGoodOpen()
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
            }
        }
        else{
            handleBadOpen()
        }
     
        
    }

 
  }
  