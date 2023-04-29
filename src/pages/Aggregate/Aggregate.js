


import '../../App.css';
import React, { useState, useEffect } from 'react';
import TableAggregate from './TableAggregate';
import { API, } from "aws-amplify";
import { listQuestions } from "../../graphql/queries";

function Aggregate() {

  useEffect(() => {
    fetchQuestion();
  }, []);

const [currentLesson, setCurrentLesson] = useState([{'ID': 'L1Q1', 'PFT': 75, 'PLQ': 2 , 'QuestionText': 'Question 1: Select the whole numbers' }, {'ID': 'L1Q2', 'PFT': '72', 'PLQ': 3, 'QuestionText': 'Question 2: Which number comes directly after four?'}]);
const data = [[{'ID': 'L1Q1', 'PFT': 75, 'PLQ': 2 , 'QuestionText': 'L1Q1' }, {'ID': 'L1Q2', 'PFT': '72', 'PLQ': 3, 'QuestionText': 'L1Q2'}], 
 [{'ID': 'L2Q1', 'PFT': 75, 'PLQ': 2 , 'QuestionText': 'L2Q1' }, {'ID': 'L1Q2', 'PFT': '72', 'PLQ': 3, 'QuestionText': 'L2Q2'}], 
 [{'ID': 'L3Q1', 'PFT': 75, 'PLQ': 2 , 'QuestionText': 'L3Q1' }, {'ID': 'L3Q2', 'PFT': '72', 'PLQ': 3, 'QuestionText': 'L3Q2'}], 
 [{'ID': 'L4Q1', 'PFT': 75, 'PLQ': 2 , 'QuestionText': 'L4Q1' }, {'ID': 'L4Q2', 'PFT': '72', 'PLQ': 3, 'QuestionText': 'L4Q2'}]];
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
      tableData={currentLesson}
      />
  </div>
)

function getOption() {
  console.log(document.getElementById('lesson').value);
  const lesson = document.getElementById('lesson').value;

    setCurrentLesson(data[lesson]);

}


  async function fetchQuestion() {
    const apiData = await API.graphql({ query: listQuestions, variables:  {'_deleted': false} });
    const notesFromAPI = apiData.data.listQuestions.items;
    console.log(notesFromAPI);
  //  const newTest = notesFromAPI[].where((item) => !item['_deleted']).toList()
  //  console.log(notesFromAPI[0]['_deleted']);
  }

}



export default Aggregate;
