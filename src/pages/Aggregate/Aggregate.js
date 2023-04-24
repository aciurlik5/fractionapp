


// import '../App.css';
import React from 'react';
import TableAggregate from './TableAggregate';

function Aggregate() {
return (
  <div>
              <TableAggregate
      tableData={[{'ID': 'L1Q1', 'PFT': 75, 'PLQ': 2 , 'QuestionText': 'Question 1: Select the whole numbers' }, {'ID': 'L1Q2', 'PFT': '72', 'PLQ': 3, 'QuestionText': 'Question 2: Which number comes directly after four?'}]}
      />
  </div>
)

}


export default Aggregate;
