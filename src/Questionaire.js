import React from "react";


const Questionaire =({handleAnswer, data:{question, correct_answer, incorrect_answers},
}) => {
    const shuffledAnswer=[correct_answer, ...incorrect_answers].sort(()=>Math.random()-0.5);

    return(
    <div>
        <h2 className="flex justify-center"> MCQ Question </h2>
        <hr className="p-6"></hr>
        <div className="p-2">{question} ****</div>
        <div className="grid cols-2 gap-2 mt-4 p-2">
            {shuffledAnswer.map((answer)=>(
                <button className={`${correct_answer===answer? 'bg-purple-300': 'bg-white'} p-4 text-purple-800 round shadow`}
                    onClick={()=>handleAnswer(answer)}>{answer}</button>
            ))}
        </div>
    </div>
)};



export default Questionaire;
