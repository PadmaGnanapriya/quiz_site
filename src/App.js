import React, {useEffect, useState} from 'react';
import Questionaire from "./Questionaire";

const API_URL=
    'https://opentdb.com/api.php?amount=10&category=18&type=multiple';
function App() {
   const [questions, setQuesions]=useState([]);
  const [currentIndex, setCurrentIndex]= useState(0);
  const [score, setScore]=useState(0);
  // const [gameEnded, setGameEnded]=useState(false);
  const [showAnswers, setShowAnswers]=useState(false);

  useEffect(() => {
    fetch(API_URL)
        .then((res)=>res.json())
        .then((data) => {
          setQuesions(data.results);
          setCurrentIndex(0);
        });
  },[]);

  const handelAnswer =(answer)=>{
      if(!showAnswers){
          if(answer === questions[currentIndex].correct_answer){
              setScore(score+1);
          }
      }
      setShowAnswers(true);
      // handleNextQuestion();
      setCurrentIndex(currentIndex+1);
  };

  const handleNextQuestion = () => {
      setShowAnswers(false);
      setCurrentIndex(currentIndex+1);
  };

  return questions.length>0 ?  (
          <div className='container'>
              {currentIndex>=questions.length?(
                  <h2>Your score is {score} </h2>

              ):(
                <Questionaire
                  data={questions[currentIndex]}
                  handleAnswer={handelAnswer}
                  showAnswers={showAnswers}
                  handleNextQuestion={handleNextQuestion}
                />
              )}
          </div>
  ):(<div> Loading</div>);
}

export default App;
