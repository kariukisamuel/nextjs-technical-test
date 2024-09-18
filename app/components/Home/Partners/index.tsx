"use client";
import React, { useState, useEffect } from 'react';
import SectionTitle from "../../Common/SectionTitle";
import ProfileCard from "./ProfileCard";
import Modal from "../../Common/Modal";
import SkeletonLoader from '../../Common/SkeletonLoader';
import LoadMoviesAndActors from '@/app/api/LoadMoviesAndActors';

type title = {
  title: string;
};
interface KnownForItem {
  overview: string;
}

interface Actors {
  id: number;
  name: string;
  profile_path: string;
  known_for: KnownForItem[];
}

const Partners = ({ title }: title) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actors, setActors] = useState<Actors[]>([]);
  const [visibleActors, setVisibleActors] = useState<Actors[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const count = 4;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchActors = async (limit: number) => {
      try {
        const response = await LoadMoviesAndActors('actors', 1);
        const allActors: any = response.slice(0, limit);
        // setTimeout(() => {
          setActors(allActors);
          setVisibleActors(allActors.slice(0, count))
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

    fetchActors(16);
  }, []);

  if (error) {
    return (
      <p>Error Loading Something Isn't Right</p>
    )
  }


  return (
    <section id="meet-a-partner" className="w-full pt-20">
      <div className="w-5/6 lg:w-[70%] mx-auto">
        <div>
          <SectionTitle title={title} />
        </div>
        <div className="flex justify-between mt-10 flex-wrap">

          {
            isLoading
              ?
              <>
                <SkeletonLoader width="w-[100px]" height="h-[100px]" circular />
                <SkeletonLoader width="w-[100px]" height="h-[100px]" circular />
                <SkeletonLoader width="w-[100px]" height="h-[100px]" circular />
                <SkeletonLoader width="w-[100px]" height="h-[100px]" circular />

              </>

              :
              visibleActors.map((actor) => (
                <ProfileCard
                  key={actor.id}
                  imageUrl={actor.profile_path}
                  name={actor.name}
                  knownFor={actor.known_for[0].overview}

                />
              ))}

        </div>
        <div className="flex justify-center">
          {
          visibleActors.length > 0 && 
          <button
            onClick={openModal}
            className=" bg-white text-blazingRed border-2 border-blazingRed py-2 px-6   hover:bg-blazingRed hover:text-white hover hover:border-2 hover:border-white rounded-full text-lg font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            See other partners
          </button>
          }


          <Modal isOpen={isModalOpen} onClose={closeModal}>
            {
              isLoading
                ?
                <>
                  <SkeletonLoader width="w-full sm:w-[50%] md:w-[23.5%] lg:w-[23.5%]" height="h-[200px]" circular />

                </>

                :

                <>
                  <SectionTitle title="All Partners" />
                  <div className="flex flex-wrap my-5">
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



            }

          </Modal>
        </div>
      </div>
    </section >
  );
};

export default Partners;
