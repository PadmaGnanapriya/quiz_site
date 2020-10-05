import React, {useEffect, useState} from 'react';
import Questionaire from "./Questionaire";

const API_URL=
    'https://opentdb.com/api.php?amount=10&category=18&type=multiple';
function App() {
  const [questions, setQuesions]=useState([]);
  const [currentIndex, setCurrentIndex]= useState(0);
  const [score, setScore]=useState(0);
  const [gameEnded, setGameEnded]=useState(false);

  useEffect(() => {
    fetch(API_URL)
        .then((res)=>res.json())
        .then((data) => {
          setQuesions(data.results);
          setCurrentIndex(0);
        });
  },[]);

  const handelAnswer =(answer)=>{
    //Check the answer
    const newIndex =currentIndex+1;
    setCurrentIndex(newIndex);
    setCurrentIndex(currentIndex+1);
    if(answer===questions[currentIndex].correct_answer){
        setScore(score+1);
    }
    if(newIndex>=questions.length){
        setGameEnded(true);
    }


    //Show another answer

    //change score if correct


  };
  return gameEnded ?  (
      <div> Your Score is {score}</div>
  ):(
      questions.length>0?(
          <div className='container'>
              <Questionaire
                  data={questions[currentIndex]}
                  handleAnswer={handelAnswer}
              />
          </div>
      ):(
          <h2>Loading</h2>
      )
  );

  return questions.length>0?(<div className="container" >

      <Questionaire data={questions[currentIndex]}handleAnswer={handelAnswer} />

  </div>):null;
}

export default App;
