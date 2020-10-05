import React from "react";


const Questionaire =({handleAnswer, data:{question, correct_answer, incorrect_answers, showAnswers, handleNextQuestion},
}) => {
    const shuffledAnswer=[correct_answer, ...incorrect_answers].sort(()=>Math.random()-0.5);

    const handleNextQuestion2 = () => { alert("Not define this function");};


    return(
    <div>
        <h2 className="flex justify-center"> MCQ Question </h2>
        <hr className="p-6"></hr>
        <div className="p-2">{question} ****</div>
        <div className="grid cols-2 gap-2 mt-4 p-2">
            {shuffledAnswer.map((answer)=>{
                const bgColor= showAnswers
                    ? answer == correct_answer
                        ? 'bg-green-500'
                        : 'bg-red-500'
                    :'bg-white';
                return(
                    <button
                        className={`${bgColor} 
                        p-4 text-purple-800 
                        round shadow`}
                        onClick={()=>handleAnswer(answer)}>{answer}
                    </button>
                );
            })}
        </div>

           <button onClick={()=>handleNextQuestion2()}
          className={`ml-auto bg-purple-700 text-white p-4 round shadow mt-6`}>
           Show answer
        </button>
          <button onClick={()=>handleNextQuestion2()}
          className={`ml-auto bg-purple-700 text-white p-4 round shadow mt-6`}>
            Next Question
        </button>
    </div>
    );
};



export default Questionaire;
