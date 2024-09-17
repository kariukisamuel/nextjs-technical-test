"use client";
import SectionTitle from "../../Common/SectionTitle";
import SkeletonLoader from "../../Common/SkeletonLoader";
import StepCard from "./StepCard";
import { useState, useEffect } from "react";
import LoadMoviesAndActors from "@/app/api/LoadMoviesAndActors";

type title = {
  title: string;
};
interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

const HowItWorks = ({ title }: title) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [visibleMovies, setVisibleMovies] = useState<Movie[]>([]);
  const [count, setCount] = useState(3);
  const [showMore, setShowMore] = useState(true);



  useEffect(() => {
    const fetchMoviesWithLimit = async (limit: number) => {
      setIsLoading(true);
      try {
        const response = await LoadMoviesAndActors('movies', 1);
        const allMovies: Movie[] = response.slice(0, limit);
        // Simulate a 15-second delay to test skeleton loaders
        // setTimeout(() => {
        setMovies(allMovies);
        setVisibleMovies(allMovies.slice(0, count));
        setIsLoading(false);
        // }, 15000); // 15,000 milliseconds = 15 seconds


      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error('An unknown error occurred'));
        }
      }
    };

    fetchMoviesWithLimit(15);
  }, []);
  const handleLoadMore = () => {
    const newCount = count + 3;
    setCount(newCount);
    setVisibleMovies(movies.slice(0, newCount));
  };
  const handleLoadLess = () => {
    const newCount = Math.max(3, count - movies.length); // Ensure at least 3 movies are displayed
    setCount(newCount);
    setVisibleMovies(movies.slice(0, newCount));
    if (newCount <= 3) {
      setShowMore(true); // Reset to show more if we go back to initial count
    }
  };




  return (
    <section id="howitworks" className="w-full pt-20">
      <div className="w-5/6 lg:w-[70%] mx-auto">
        <div>
          <SectionTitle title={title} />
        </div>
        <div className="flex justify-between mt-10 flex-wrap">


          {
            isLoading
              ?
              <>
                <SkeletonLoader width="sm:w-[31.5%]" height="h-[400px]" />
                <SkeletonLoader width="sm:w-[31.5%]" height="h-[400px]" />
                <SkeletonLoader width="sm:w-[31.5%]" height="h-[400px]" />
              </>

              :
              visibleMovies.map((movie) => (
                <StepCard
                  key={movie.id}
                  imageUrl={movie.poster_path}
                  title={movie.title}
                  description={movie.overview}

                />
              ))}

        </div>
        {visibleMovies.length > 0 &&
          <div className="flex justify-center">
            {visibleMovies.length < movies.length ? <button
              onClick={handleLoadMore}
              className=" bg-blazingRed text-white  py-2 px-6 rounded-full text-lg font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              Load More
            </button> : <button
              onClick={handleLoadLess}
              className=" bg-blazingRed text-white  py-2 px-6 rounded-full text-lg font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              Load Less
            </button>}

          </div>
        }

      </div>
    </section>
  );
};


export default HowItWorks;
