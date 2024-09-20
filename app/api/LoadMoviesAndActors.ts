// Interface defining the configuration object with properties apiUrl and apiKey as strings.
interface Config {
  apiUrl: string;
  apiKey: string;
}
// Interface defining the URL parameters object with properties api_key and language as strings.
interface UrlParams {
  api_key: string;
  language: string;
}
// Object with actual configuration values for apiUrl and apiKey (replace with your actual API details)
const config: Config = {
  apiUrl: "https://api.themoviedb.org/3/",
  apiKey: "644268ca71ec4cf7014e05ff30178df8",
};

/**
 * buildUrl: Function that takes a path and URL params object.
 *
 * @param {string} path - The specific path to append to the base API URL.
 * @param {Object} params - An object representing the URL parameters to be included in the query string.
 *
 * @returns {string} - The full URL constructed by combining the base API URL, the provided path, and the query string generated from the params object.
 *
 * Functionality:
 * 1. Creates a URLSearchParams object from the provided params object.
 * 2. Constructs the URL by combining config.apiUrl, the given path, and the query string from URLSearchParams.
 */
const buildUrl = (path: string, params: UrlParams): string => {
  const urlParams = new URLSearchParams(Object.entries(params));
  return `${config.apiUrl}${path}?${urlParams.toString()}`;
};

/*
 * popularActorsUrl & popularMoviesUrl:
 * - These URLs are built using the buildUrl function.
 * - Appropriate paths ('/popular/actors' and '/popular/movies') are passed along with common parameters like api_key and language.
 * - The buildUrl function constructs the full URLs by appending the base config.apiUrl, the given path, and adding the query string from common params.
 */

const popularActorsUrl = buildUrl("person/popular", {
  api_key: config.apiKey,
  language: "en-US",
});

const popularMoviesUrl = buildUrl("movie/popular", {
  api_key: config.apiKey,
  language: "en-US",
});

/**
 * Movie & Actor Types:
 *
 * Movie:
 * - Interface defining the structure of a movie object.
 * - Contains properties like:
 *    - id: number (Unique identifier for the movie),
 *    - title: string (The title of the movie),
 *    - releaseDate: string (Release date of the movie),
 *    - other properties as required.
 *
 * KnownForItem:
 * - Interface representing a single item in the 'known_for' array of an actor.
 * - Contains properties like:
 *    - id: number (Unique identifier for the item),
 *    - title: string (Title of the movie or TV show),
 *    - mediaType: string (Indicates whether it's a movie or TV show).
 *
 * Actors:
 * - Interface defining the structure of an actor object.
 * - Contains properties like:
 *    - id: number (Unique identifier for the actor),
 *    - name: string (Actor's name),
 *    - known_for: KnownForItem[] (An array of KnownForItem objects that the actor is known for).
 */

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}
interface KnownForItem {
  overview: string;
}
interface Actors {
  id: number;
  name: string;
  profile_path: string;
  known_for: KnownForItem[];
}

/**
 * LoadMoviesAndActors: Generic async function for fetching movies or actors.
 *
 * @param {string} filter - The type of data to fetch ("movies" or "actors").
 * @param {number} page - The page number for pagination.
 *
 * @returns {Promise<Movie[] | Actors[]>} - Returns a promise that resolves to an array of Movie objects if the filter is "movies",
 *                                          or an array of Actors objects if the filter is "actors".
 *
 * Functionality:
 * 1. Uses a type guard to determine the return type based on the filter (either movies or actors).
 * 2. Constructs the appropriate URL using buildUrl:
 *    - Uses popularMoviesUrl if the filter is "movies", or
 *    - Uses popularActorsUrl if the filter is "actors".
 * 3. Fetches data from the appropriate URL.
 * 4. Handles potential errors during the fetch process (e.g., network issues).
 * 5. Parses and returns the data (specifically, the 'results' array) as either an array of Movie objects or an array of Actors objects based on the filter.
 */

const LoadMoviesAndActors = async <T extends "movies" | "actors">(
  filter: T,
  page: number,
): Promise<T extends "movies" ? Movie[] : Actors[]> => {
  try {
    const fetchUrl = filter === "movies" ? popularMoviesUrl : popularActorsUrl;
    const res = await fetch(`${fetchUrl}&page=${page}`, { method: "GET" });

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status}`);
    }
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error for proper handling
  }
};

// Exports the LoadMoviesAndActors function as the default export.
export default LoadMoviesAndActors;
