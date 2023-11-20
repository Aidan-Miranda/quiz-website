"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { questions } from "@/data/data";
import Question from "@/components/Question";

const shuffleQuestions = (array: any[]) => {
  const newArray = array.sort(() => Math.random() - 0.5);
  return newArray.slice(0, 5);
};

export default function CategoryPage() {
  const { category } = useParams();

  const decodedCategory = Array.isArray(category)
    ? decodeURIComponent(category[0])
    : decodeURIComponent(category);

  const [filteredQuestions, setFilteredQuestions] = useState(
    questions.filter((question) => question.category === decodedCategory)
  );
  const [indexQuestion, setIndexQuestion] = useState(0);

  useEffect(() => {
    const newQuestions = shuffleQuestions(filteredQuestions);
    setFilteredQuestions(newQuestions);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="background -z-10">
        <div className="stars -z-10"></div>
        <div className="stars2 -z-10"></div>
        <div className="stars3 -z-10"></div>
      </div>
      <div className="container flex flex-col items-center justify-center gap-10">
        <Question
          filteredQuestion={filteredQuestions[indexQuestion]}
          setIndexQuestion={setIndexQuestion}
          indexQuestion={indexQuestion}
          filteredQuestions={filteredQuestions}
        />
      </div>
    </main>
  );
}
