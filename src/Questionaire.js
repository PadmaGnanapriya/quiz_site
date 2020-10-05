import React from "react";

const Button =({answer, className})=> (
    <button className={`bg-while p-4 text-purple round shadow ${className}`}>{answer}</button>
);

const Questionaire =({handleAnswer, data:{question, correct_answer, incorrect_answers},
}) => {
    const shuffledAnswer=[correct_answer, ...incorrect_answers].sort(()=>Math.random()-0.5);

    return(
    <div>
        <h2 className="flex justify-center"> MCQ Question </h2>
        <hr className="p-6"></hr>
        <div className="p-2">{question} ****</div>
        <div className="grid cols-2 gap-2 mt-4 p-2">
            <Button className={correct_answer===shuffledAnswer[0]?'bg-purple-300':''} onClick={()=>handleAnswer(shuffledAnswer[0])} answer={shuffledAnswer[0]} />
            <Button className={correct_answer===shuffledAnswer[1]?'bg-purple-300':''} onClick={()=>handleAnswer(shuffledAnswer[1])} answer={shuffledAnswer[1]} />
            <Button className={correct_answer===shuffledAnswer[2]?'bg-purple-300':''} onClick={()=>handleAnswer(shuffledAnswer[2])} answer={shuffledAnswer[2]} />
            <Button className={correct_answer===shuffledAnswer[3]?'bg-purple-300':''} onClick={()=>handleAnswer(shuffledAnswer[3])} answer={shuffledAnswer[3]} />
        </div>
    </div>
)};



export default Questionaire;
