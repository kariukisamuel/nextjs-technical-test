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
const popularPersonsUrl = buildUrl('person/popular', {
    api_key: config.apiKey,
    language: 'en-US'
  
});

const popularMoviesUrl = buildUrl('movie/popular', {
    api_key: config.apiKey,
    language: 'en-US'
 
});


const loadMovies = async (filter: 'movies' | 'persons', page:number): Promise<any> => {
    try {
        const fetchUrl = filter === 'movies' ? popularMoviesUrl : popularPersonsUrl;
        const res = await fetch(`${fetchUrl}&page=${page}`, { method: 'GET' });

        if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.status}`);
        }
        const data = await res.json();
        return data.results;

    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error for proper handling
    }
};

export default loadMovies;
