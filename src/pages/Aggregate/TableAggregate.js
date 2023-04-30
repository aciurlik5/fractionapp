

//
//  [{'LN:: 1, 'ID': 'L1Q1', 'PFT': 75, 'PLQ': 2 , 'QuestionText': 'Question 1: Select the whole numbers' }, { LN:: 1, 'ID': 'L1Q2', 'PFT': '72', 'PLQ': 3, 'QuestionText': 'Question 2: Which number comes directly after four?ß'}]
//
//
//
// 

// import '../App.css';
import React from 'react';



export default function TableAggregate({tableData}) {

    

    return (

        <div className="Lesson-Content-Text">
          <table>
  <thead>
    <tr>
      <th>Question Text</th>
      <th>% Correct on First Try</th>
      <th>% Last Question</th>
    </tr>
  </thead>
  <tbody>
    {tableData.map(item => {
      return (
        <tr key={item.ID}>
          <td>{ item.QuestionText }</td>
          <td>{ item.PFT }</td>
          <td>{ item.PLQ }</td>

        </tr>
      );
    })}
  </tbody>
</table>
</div>




 
 )
            }
  