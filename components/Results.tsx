import { questionsInterface } from "@/data/data";
import Link from "next/link";
import React from "react";

interface QuestionProps {
  score: number;
  filteredQuestions: questionsInterface[];
  onReset: any;
}
export default function Results(props: QuestionProps) {
  const { score, filteredQuestions, onReset } = props;

  return (
    <div className="flex flex-col justify-between shadow-md bg-[#2e4561]/95 w-[75vw] lg:w-[800px] p-10 rounded-lg text-slate-50">
      <h1></h1>
      <div className="flex flex-col text-center text-2xl font-semibold">
        <span>You guessed</span>
        <span className="text-5xl md:text-7xl m-3 font-bold bg-gradient-to-br drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.2)] from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          {((score / filteredQuestions.length) * 100).toFixed(0)}%
        </span>
        <span className="flex flex-col">
          <span>of the questions:</span>{" "}
          <span>
            ({score} out of {filteredQuestions.length})
          </span>
        </span>
      </div>
      <div className="grid grid-cols-1 md:flex gap-2 justify-around w-full text-center mt-4">
        <Link
          href={"/"}
          className="border-4 w-full md:w-2/5 py-2 rounded-lg font-semibold hover:bg-gradient-to-br hover:from-[#1b2735] hover:to-[#090a0f]"
        >
          Main menu
        </Link>
        <button
          onClick={onReset}
          className="border-4 w-full md:w-2/5 py-2 rounded-lg font-semibold hover:bg-gradient-to-br hover:from-[#1b2735] hover:to-[#090a0f]"
        >
          Restart
        </button>
      </div>
    </div>
  );
}
