// TypeScript types for configuration and URL params
interface Config {
  apiUrl: string;
  apiKey: string;
}

interface UrlParams {
  api_key: string;
  language: string;
}

// Configuration object from environment variables
const config: Config = {
  apiUrl: "https://api.themoviedb.org/3/",
  apiKey: "644268ca71ec4cf7014e05ff30178df8",
};

// Function to build URLs with query parameters
const buildUrl = (path: string, params: UrlParams): string => {
  const urlParams = new URLSearchParams(Object.entries(params));
  return `${config.apiUrl}${path}?${urlParams.toString()}`;
};

// URLs for popular persons and movies
const popularActorsUrl = buildUrl("person/popular", {
  api_key: config.apiKey,
  language: "en-US",
});

const popularMoviesUrl = buildUrl("movie/popular", {
  api_key: config.apiKey,
  language: "en-US",
});

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

//added generic to cover filters movies /actors
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

export default LoadMoviesAndActors;
