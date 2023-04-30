import '../App.css';


import {useState} from 'react';
import LessonOne from '../../src/pages/1/OneWholeNumbers'
import LessonTwo from '../../src/pages/2/TwoConceptualizingFractions'
import LessonThree from '../../src/pages/3/ThreeEquivilantFractions'
import LessonFour from '../../src/pages/4/FourOrderingFractions'
import Aggregate from '../../src/pages/Aggregate/Aggregate'



function Home() {

    const [count, setCount] = useState(1);

  return (
    <div>
        <button className = "Lesson-Content-Button-Nav" onClick={() => {setCount(1);}}>Lesson 1</button>
        <button className = "Lesson-Content-Button-Nav" onClick={() => {setCount(2);}}>Lesson 2</button>
        <button className = "Lesson-Content-Button-Nav" onClick={() => {setCount(3);}}>Lesson 3</button>
        <button className = "Lesson-Content-Button-Nav" onClick={() => {setCount(4);}}>Lesson 4</button>
        <button className = "Lesson-Content-Button-Nav" onClick={() => {setCount(5);}}>Aggregate Data</button>








  
  {count === 1 &&

    <div>
        <LessonOne/>      
    </div>
          
 }

{count === 2 &&

<div>
    <LessonTwo/>      
</div>
      
}

{count === 3 &&

<div>
    <LessonThree/>      
</div>
      
}

{count === 4 &&

<div>
    <LessonFour/>      
</div>
      
}

{count === 5 &&

<div>
    <Aggregate/>      
</div>
      
}



    </div>
  )


    }













export default Home;
