


import '../../App.css';
import React, { useState, useEffect } from 'react';
import TableAggregate from './TableAggregate';
import { API, } from "aws-amplify";
import { listQuestions } from "../../graphql/queries";


function Aggregate() {
  useEffect(() => {
    fetchQuestion();
  }, []);

//const data = [[{'ID': 'L1Q1', 'PFT': 75, 'PLQ': 2 , 'QuestionText': 'L1Q1' }, {'ID': 'L1Q2', 'PFT': '72', 'PLQ': 3, 'QuestionText': 'L1Q2'}], 
//  [{'ID': 'L2Q1', 'PFT': 75, 'PLQ': 2 , 'QuestionText': 'L2Q1' }, {'ID': 'L1Q2', 'PFT': '72', 'PLQ': 3, 'QuestionText': 'L2Q2'}], 
//  [{'ID': 'L3Q1', 'PFT': 75, 'PLQ': 2 , 'QuestionText': 'L3Q1' }, {'ID': 'L3Q2', 'PFT': '72', 'PLQ': 3, 'QuestionText': 'L3Q2'}], 
//  [{'ID': 'L4Q1', 'PFT': 75, 'PLQ': 2 , 'QuestionText': 'L4Q1' }, {'ID': 'L4Q2', 'PFT': '72', 'PLQ': 3, 'QuestionText': 'L4Q2'}]];
const [currentLesson, setCurrentLesson] = useState([0]);
const [data, setNotes] = useState([[],[],[],[]]);

return (
  

  
  <div>

<label style={{ display : "inline"}}
className="Lesson-Content-Text" for="lesson">Lesson: </label>
<select style={{ display : "inline"}} className="Lesson-Content-Text" name="lessons" id="lesson" onChange={() => {
               getOption();
            }}>
  <option value="0">Lesson 1: Introduction/Whole Numbers</option>
  <option value="1">Lesson 2: Conceptualizing Fractions</option>
  <option value="2">Lesson 3: Comparing Fractions</option>
  <option value="3">Lesson 4: Ordering Fractions </option>
</select>

        

       <TableAggregate
      tableData={data[currentLesson]}
      />  
  </div>
)

function getOption() {
  console.log('TASt',document.getElementById('lesson').value);
  const lesson = document.getElementById('lesson').value;
    console.log('lesson', parseInt(lesson));
    setCurrentLesson(parseInt(lesson));

}



// const data = [[{'ID': 'L1Q1', 'PFT': 75, 'PLQ': 2 , 'QuestionText': 'L1Q1' }, {'ID': 'L1Q2', 'PFT': '72', 'PLQ': 3, 'QuestionText': 'L1Q2'}], 
//  [{'ID': 'L2Q1', 'PFT': 75, 'PLQ': 2 , 'QuestionText': 'L2Q1' }, {'ID': 'L1Q2', 'PFT': '72', 'PLQ': 3, 'QuestionText': 'L2Q2'}], 
//  [{'ID': 'L3Q1', 'PFT': 75, 'PLQ': 2 , 'QuestionText': 'L3Q1' }, {'ID': 'L3Q2', 'PFT': '72', 'PLQ': 3, 'QuestionText': 'L3Q2'}], 
//  [{'ID': 'L4Q1', 'PFT': 75, 'PLQ': 2 , 'QuestionText': 'L4Q1' }, {'ID': 'L4Q2', 'PFT': '72', 'PLQ': 3, 'QuestionText': 'L4Q2'}]];



  async function fetchQuestion() {
    let data = [[],[],[],[]];
    const apiData = await API.graphql({ query: listQuestions, variables:  {'_deleted': false} });
    const notesFromAPI = apiData.data.listQuestions.items;
    const result = notesFromAPI.filter(questionAns => questionAns.QID.length === 5);
    let dataSplitByQuestion = {};
    for(let i=0; i<result.length; i++){
      if(dataSplitByQuestion.hasOwnProperty(result[i].QID)){
        dataSplitByQuestion[result[i].QID].push(result[i]);
      } else{
        dataSplitByQuestion[result[i].QID] = [result[i]];
      }
    }
    Object.keys(dataSplitByQuestion).forEach(function(key,index) {
      let correctCount = 0;
      let incorrectCount = 0;
      let secondGuessCount = 0;
      let questionText = '';
      for(let item of dataSplitByQuestion[key]){
        questionText = item.questionText;
        if(item.isCorrect){
          correctCount = correctCount + 1;
          if(item.guessCount === 2){
            secondGuessCount = secondGuessCount + 1;
          }
        }else{
          incorrectCount = incorrectCount + 1;
        }
      }
      const firstTryPercentage = ((correctCount / dataSplitByQuestion[key].length) * 100).toFixed(2);
      let secondTryPercentage = 'No Incorrect Answers Given (No second try needed)';
      if(incorrectCount > 0){
         secondTryPercentage = ((secondGuessCount/ incorrectCount) * 100).toFixed(2);
      }

      let percentage = {
        'ID': key,
        'PFT': firstTryPercentage,
        'PLQ': secondTryPercentage,
        'QuestionText': questionText
      }
      console.log('percentage', percentage)
      data[key[2]-1].push(percentage); 
      setNotes(data);
  });

  }

}



export default Aggregate;
