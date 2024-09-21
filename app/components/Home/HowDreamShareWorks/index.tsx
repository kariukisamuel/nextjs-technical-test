// This line indicates that the component uses the client-side rendering approach (React)
"use client";
// Import necessary components and functions
import SkeletonLoader from "../../Common/SkeletonLoader";
import StepCard from "./StepCard";
import { useState, useEffect, useRef } from "react";
import AnchorSection from "../../Common/AnchorSection";

// Define an interface for the movie data structure
interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}
// Create the `HowItWorks` functional component
const HowDreamshareWorks = () => {
  // Define state variables for managing data and UI state
  const [movies, setMovies] = useState<Movie[]>([]); // Array to store fetched movies
  const [isLoading, setIsLoading] = useState(true); // Flag to indicate loading state
  const [error, setError] = useState<Error | null>(null); // Error state for potential errors
  const [visibleMovies, setVisibleMovies] = useState<Movie[]>([]); // Array to hold displayed movies
  const [count, setCount] = useState(3); // Number of movies to display initially
  const sectionPopular = useRef<HTMLDivElement>(null); // Reference to the section element

  // Use effect hook to fetch data on component mount
  useEffect(() => {
    const fetchMoviesWithLimit = async (limit: number) => {
      try {
        // Fetch movies using the provid function
        const filter="movies";
        const res = await fetch(`/api/movies-actors?filter=${filter}&page=1`);
        const result = await res.json();
        const allMovies: Movie[] = result.slice(0, limit);

        // Simulate a 15-second delay for testing skeleton loaders
        // setTimeout(() => {
        setMovies(allMovies); // Update state with all fetched movies
        setVisibleMovies(allMovies.slice(0, count)); // Set initial visible movies
        setIsLoading(false); // Set loading state to false after successful fetch
        // }, 15000); // 15,000 milliseconds = 15 seconds
      } catch (error) {
        // Handle potential errors during data fetching
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error("An unknown error occurred"));
        }
      }
    };

    fetchMoviesWithLimit(15); // Fetch 15 movies initially
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Function to handle loading more movies
  const handleLoadMore = () => {
    const newCount = count + 3;
    setCount(newCount);
    setVisibleMovies(movies.slice(0, newCount)); // Update visible movies based on new count
  };

  // Function to handle loading less movies (ensures at least 3 are displayed)
  const handleLoadLess = () => {
    const newCount = Math.max(3, count - movies.length);
    setCount(newCount);
    setVisibleMovies(movies.slice(0, newCount));
    scrollToSection(sectionPopular); // Scroll back to the section after loading less
  };

  // Function to scroll to a section using the provided reference
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly
  };

  // Handle error scenario by displaying an error message
  if (error) {
    return <p>Error Loading Something Isn&apos Right</p>;
  }

  // Return the JSX structure for rendering the section
  return (
    <AnchorSection
      id="how-dreamshare-works"
      title="How Dreamshare works?"
      ref={sectionPopular}
    >
      <div className="flex justify-between mt-10 flex-wrap">
        {/* Conditionally render skeleton loaders while data is loading */}
        {isLoading ? (
          <>
            <SkeletonLoader width="sm:w-[31.5%]" height="h-[400px]" />
            <SkeletonLoader width="sm:w-[31.5%]" height="h-[400px]" />
            <SkeletonLoader width="sm:w-[31.5%]" height="h-[400px]" />
          </>
        ) : (
          //Iterate over the `visibleMovies` array and render `StepCard` components for each movie

          visibleMovies.map((movie, index) => (
            <StepCard
              key={movie.id}
              stepNumber={index + 1}
              imageUrl={movie.poster_path}
              title={movie.title}
              description={movie.overview}
            />
          ))
        )}
      </div>
      {/* Conditionally render load more/load less buttons based on the number of visible movies */}
      {visibleMovies.length > 0 && (
        <div className="flex justify-center">
          {/* If there are more movies to load */}
          {visibleMovies.length < movies.length ? (
            <button
              onClick={handleLoadMore} // Call the `handleLoadMore` function when clicked
              className=" bg-blazingRed text-white  py-2 px-6 rounded-full text-lg font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              Load More
            </button>
          ) : (
            //  If all movies are loaded
            <button
              onClick={handleLoadLess} // Call the `handleLoadLess` function when clicked
              className=" bg-blazingRed text-white  py-2 px-6 rounded-full text-lg font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              Load Less
            </button>
          )}
        </div>
      )}
    </AnchorSection>
  );
};

export default HowDreamshareWorks;
