"use client";
import { images, categories } from "../data/data";
import CategoryCard from "@/components/CategoryCard";

const [
  animeIcon,
  programmingIcon,
  gamingIcon,
  literatureIcon,
  moviesIcon,
  scienceIcon,
  historyIcon,
  mythologyIcon,
  roboticsIcon,
] = images;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 md:p-24">
      <div className="background"></div>
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
        <CategoryCard
          category={categories.anime}
          src={animeIcon}
          alt={`Category ${categories.anime}`}
          gradientColor="from-indigo-500 to-purple-400"
        />

        <CategoryCard
          category={categories.programming}
          src={programmingIcon}
          alt={`Category ${categories.programming}`}
          gradientColor="from-blue-500 to-cyan-400"
        />

        <CategoryCard
          category={categories.gaming}
          src={gamingIcon}
          alt={`Category ${categories.gaming}`}
          gradientColor="from-teal-500 to-lime-400"
        />

        <CategoryCard
          category={categories.literature}
          src={literatureIcon}
          alt={`Category ${categories.literature}`}
          gradientColor="from-yellow-500 to-orange-400"
        />

        <CategoryCard
          category={categories.movies}
          src={moviesIcon}
          alt={`Category ${categories.movies}`}
          gradientColor="from-pink-500 to-red-500"
        />

        <CategoryCard
          category={categories.science}
          src={scienceIcon}
          alt={`Category ${categories.science}`}
          gradientColor="from-violet-500 to-pink-500"
        />

        <CategoryCard
          category={categories.history}
          src={historyIcon}
          alt={`Category ${categories.history}`}
          gradientColor="from-indigo-500 to-teal-400"
        />

        <CategoryCard
          category={categories.mythology}
          src={mythologyIcon}
          alt={`Category ${categories.mythology}`}
          gradientColor="from-emerald-500 to-lime-400"
        />

        <CategoryCard
          category={categories.robotics}
          src={roboticsIcon}
          alt={`Category ${categories.robotics}`}
          gradientColor="from-red-500 to-amber-500"
        />
      </div>
    </main>
  );
}
