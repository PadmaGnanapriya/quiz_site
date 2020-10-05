import React, {useEffect, useState} from 'react';
import Questionaire from "./Questionaire";

const API_URL=
    'https://opentdb.com/api.php?amount=10&category=18&type=multiple';
function App() {
  const[questions, setQuesions]=useState([]);
  useEffect(() => {
    fetch(API_URL)
        .then((res)=>res.json())
        .then((data) => {
          setQuesions(data.results);
        });
  },[]);

  const handelAnswer =(answer)=>{

  };

  return questions.length>0?(<div className="container" >
    <Questionaire data={questions[0]}handleAnswer={handelAnswer} />
  </div>):null;
}

export default App;
