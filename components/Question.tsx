import { questionsInterface } from "@/data/data";
import React, { useEffect, useState } from "react";
import Results from "./Results";
import { motion } from "framer-motion";
import { IoReloadCircleSharp } from "react-icons/io5";


interface QuestionProps {
  filteredQuestion: questionsInterface;
  filteredQuestions: questionsInterface[];
  indexQuestion: number;
  setIndexQuestion: (index: number) => void;
}
export default function Question(props: QuestionProps) {
  const {
    filteredQuestion,
    filteredQuestions,
    indexQuestion,
    setIndexQuestion,
  } = props;
  const [score, setScore] = useState(0);
  const [selectAnswerIndex, setSelectAnswerIndex] = useState<number | null>(
    null
  );
  const [wasAnswered, setWasAnswered] = useState(false);
  const [randomAnswers, setRandomAnswers] = useState<string[]>([]);
  const [activeResults, setActiveResults] = useState(false);

  useEffect(() => {
    const answers = [
      ...filteredQuestion.incorrect_answers,
      filteredQuestion.correct_answer,
    ];

    setRandomAnswers(answers.sort(() => Math.random() - 0.5));
  }, [filteredQuestion]);

  const checkAnswer = (answerText: string, index: number) => {
    if (answerText === filteredQuestion.correct_answer) {
      setScore(score + 1);
    }
    setSelectAnswerIndex(index);
    setWasAnswered(true);
  };

  const onNextQuestion = () => {
    setIndexQuestion(indexQuestion + 1);
    setSelectAnswerIndex(null);
    setWasAnswered(false);
  };

  const onReset = () => {
    setScore(0);
    setIndexQuestion(0);
    setSelectAnswerIndex(null);
    setWasAnswered(false);
    setActiveResults(false);
  };

  return (
    <>
      {activeResults ? (
        <Results
          score={score}
          filteredQuestions={filteredQuestions}
          onReset={onReset}
        />
      ) : (
        <div>
          <motion.div className="flex flex-col justify-between shadow-md bg-[#2e4561]/95 w-[75vw] lg:w-[800px] p-10 rounded-lg text-slate-50"
          initial={{ scale: 0, opacity: 0.3 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}>
            <div className="flex justify-between mb-4">
              <span className="md:text-xl font-bold">
                {indexQuestion + 1} / {filteredQuestions.length}
              </span>
              <div>
                <span>Difficulty: </span>
                <span>{filteredQuestion.difficulty}</span>
              </div>
            </div>
            <div>
              <h1 className="font-bold md:text-xl text-center mb-4">
                {filteredQuestion.question}
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
              {randomAnswers.map((answer, index) => (
                <motion.button
                  key={answer}
                  whileHover={{ scale: 1.05 }}
                  className={`relative inline-flex items-center justify-center p-1 md:mb-2 md:mr-2 overflow-hidden font-semibold text-slate-50 rounded-lg group 
                bg-gradient-to-br from-[#1b2735] to-[#090a0f] group-focus:bg-gradient-to-br hover:text-gray-900
                ${selectAnswerIndex !== null ? " hover:text-slate-50" : ""}`}
                  onClick={() => checkAnswer(answer, index)}
                  disabled={wasAnswered}
                >
                  <span
                    className={`relative flex items-center justify-center w-full h-full px-5 py-2.5 transition-all ease-in duration-75 bg-opacity-0 rounded-md ${
                      selectAnswerIndex !== null
                        ? index === selectAnswerIndex
                          ? answer === filteredQuestion.correct_answer
                            ? "group-hover:bg-opacity-100 bg-opacity-100 text-black bg-green-500"
                            : "group-hover:bg-opacity-100 bg-opacity-100 text-black bg-red-500"
                          : "group-hover:bg-opacity-0"
                        : "group-hover:bg-opacity-100 bg-white"
                    }`}
                  >
                    <p>{answer}</p>
                  </span>
                </motion.button>
              ))}
            </div>
            {indexQuestion + 1 === filteredQuestions.length ? (
              <button
                className={`border-4 px-5 py-2 rounded-lg font-semibold hover:bg-gradient-to-br ${
                  wasAnswered ? "hover:from-[#1b2735] hover:to-[#090a0f]" : ""
                }`}
                onClick={() => {
                  setWasAnswered(false);
                  setActiveResults(true);
                }}
                disabled={!wasAnswered}
              >
                Finish Quiz
              </button>
            ) : (
              <button
                onClick={onNextQuestion}
                className={`border-4 px-5 py-2 rounded-lg font-semibold hover:bg-gradient-to-br ${
                  wasAnswered ? "hover:from-[#1b2735] hover:to-[#090a0f]" : ""
                }`}
                disabled={!wasAnswered}
              >
                Next Question
              </button>
            )}
          </motion.div>
          {indexQuestion > 0 ? (
            <motion.div className="flex flex-col justify-between mt-10 w-[75vw] lg:w-[800px]">
              <button
                className="bg-blue-600 hover:bg-blue-500 text-slate-50 self-center px-8 p-2 border-b-4 mb-4
        border-blue-800 hover:border-blue-600 rounded text-4xl items-center flex justify-center"
                onClick={onReset}
              >
                <IoReloadCircleSharp />
              </button>
            </motion.div>
          ) : wasAnswered ? (
            <motion.div
              className="flex flex-col justify-between mt-10 w-[75vw] lg:w-[800px]"
              initial={{ scale: 0 }}
              animate={{ scale: "100%" }}
              transition={{ type: "spring" }}
            >
              <button
                className="bg-blue-600 hover:bg-blue-500 text-slate-50 self-center px-8 p-2 border-b-4 mb-4
        border-blue-800 hover:border-blue-600 rounded text-4xl items-center flex justify-center"
                onClick={onReset}
              >
                <IoReloadCircleSharp />
              </button>
            </motion.div>
          ) : (
            <></>
          )}
        </div>
      )}
    </>
  );
}
