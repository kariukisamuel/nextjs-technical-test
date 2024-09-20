// This directive indicates that the component should be rendered on the client-side
"use client";
// Import necessary components and functions
import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import Modal from "../../Common/Modal";
import SkeletonLoader from "../../Common/SkeletonLoader";
import LoadMoviesAndActors from "@/app/api/LoadMoviesAndActors";
import AnchorSection from "../../Common/AnchorSection";

// Define the interface for a known-for item
interface KnownForItem {
  overview: string;
}
// Define the interface for an actor
interface Actors {
  id: number;
  name: string;
  profile_path: string;
  known_for: KnownForItem[];
}
// Create a functional component named `Partners
const Partners = () => {
  // State variables for managing UI and data
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open state
  const [actors, setActors] = useState<Actors[]>([]); // Array to store fetched actors
  const [visibleActors, setVisibleActors] = useState<Actors[]>([]); // Array to hold visible actors
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState<Error | null>(null); // Error state
  const [count] = useState(4); // Fixed number of actors to display initially
  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true); // Set modal open state to true
  };
  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false); // Set modal open state to false
  };
  // Use effect hook to fetch actors on component mount
  useEffect(() => {
    const fetchActors = async (limit: number) => {
      // Try to fetch actors
      try {
        const response = await LoadMoviesAndActors("actors", 1); // Fetch actors
        const allActors: Actors[] = response.slice(0, limit); // Get the first 'limit' actors

        // Simulate a 60-second delay for testing purposes (remove in production)
        // setTimeout(() => {
        setActors(allActors); // Update the state with all fetched actors
        setVisibleActors(allActors.slice(0, count)); // Set visible actors to the initial count
        setIsLoading(false); // Set loading state to false
        // }, 60000); // 60,000 milliseconds = 60 seconds
      } catch (error) {
        // Handle potential errors during fetching
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error("An unknown error occurred"));
        }
      }
    };

    // Fetch actors with a limit of 16
    fetchActors(16);
  }, []); // Empty dependency array to run only once on mount

  if (error) {
    return <p>Error Loading Something Isn&apos Right</p>;
  }

  return (
    <AnchorSection
      id="meet-a-partner"
      title="Meet a partner for your best holiday"
    >
      <div className="flex justify-between mt-10 flex-wrap">
        {isLoading ? (
          <>
            <div className="w-full flex flex-col md:flex-row justify-between">
              <div className="w-full sm:w-[50%] md:w-[50%] lg:w-[23.5%]">
                <div className="flex justify-center my-5">
                  <SkeletonLoader
                    width="w-[128px]"
                    height="h-[128px]"
                    circular
                  />
                </div>
                <SkeletonLoader width="w-full" height="h-[128px]" />
              </div>
              <div className="w-full sm:w-[50%] md:w-[23.5%] lg:w-[23.5%]">
                <div className="flex justify-center my-5">
                  <SkeletonLoader
                    width="w-[128px]"
                    height="h-[128px]"
                    circular
                  />
                </div>
                <SkeletonLoader width="w-full" height="h-[128px]" />
              </div>
              <div className="w-full sm:w-[50%] md:w-[23.5%] lg:w-[23.5%]">
                <div className="flex justify-center my-5">
                  <SkeletonLoader
                    width="w-[128px]"
                    height="h-[128px]"
                    circular
                  />
                </div>
                <SkeletonLoader width="w-full" height="h-[128px]" />
              </div>
              <div className="w-full sm:w-[50%] md:w-[23.5%] lg:w-[23.5%]">
                <div className="flex justify-center my-5">
                  <SkeletonLoader
                    width="w-[128px]"
                    height="h-[128px]"
                    circular
                  />
                </div>
                <SkeletonLoader width="w-full" height="h-[128px]" />
              </div>
            </div>
          </>
        ) : (
          visibleActors.map((actor) => (
            <ProfileCard
              key={actor.id}
              imageUrl={actor.profile_path}
              name={actor.name}
              knownFor={actor.known_for[0].overview}
            />
          ))
        )}
      </div>
      <div className="flex justify-center">
        {visibleActors.length > 0 && (
          <button
            onClick={openModal}
            className=" bg-white text-blazingRed border-2 border-blazingRed py-2 px-6   hover:bg-blazingRed hover:text-white hover hover:border-2 hover:border-white rounded-full text-lg font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            See other partners
          </button>
        )}

        <Modal title="All Partners" isOpen={isModalOpen} onClose={closeModal}>
          {isLoading ? (
            <>
              <SkeletonLoader
                width="w-full sm:w-[50%] md:w-[23.5%] lg:w-[23.5%]"
                height="h-[200px]"
                circular
              />
            </>
          ) : (
            <>
              <div className="flex flex-wrap m-5">
                {actors.map((actor) => (
                  <ProfileCard
                    key={actor.id}
                    imageUrl={actor.profile_path}
                    name={actor.name}
                    knownFor={actor.known_for[0].overview}
                  />
                ))}
              </div>
            </>
          )}
        </Modal>
      </div>
    </AnchorSection>
  );
};

export default Partners;
