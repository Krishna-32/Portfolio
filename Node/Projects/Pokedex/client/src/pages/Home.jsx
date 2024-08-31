import React, { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../components/PokeBallLoader";

function Home() {
  const [data, setData] = useState([]);
  const [img, setImg] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * 20}&limit=20`
        );

        if (res.data.results.length === 0) {
          setHasMore(false);
          return;
        }

        setData((prevData) => [...prevData, ...res.data.results]);

        const imgUrls = await Promise.all(
          res.data.results.map(async (pokemon) => {
            const details = await axios.get(pokemon.url);
            return details.data.sprites.front_default;
          })
        );
        setImg((prevImg) => [...prevImg, ...imgUrls]);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [page]);

  const fetchData = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchTerm) {
      try {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`
        );
        setSearchResult(res.data);
        setSearchTerm("");
        setPage(1); // Reset page to avoid infinite scroll issues
        setData([]); // Clear previous data to avoid mixing
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        setSearchResult(null); // Reset if there's an error
      }
    }
  };

  const handleBackToHome = () => {
    setSearchResult(null);
    setData([]); // Clear previous data
    setPage(1); // Reset the page for infinite scroll
    setHasMore(true); // Reset hasMore to true for fetching more Pokémon
    window.location.reload();
    fetchData(); // Fetch initial Pokémon data again
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-blue-100 min-h-screen p-5">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-5">
        Pokédex
      </h1>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mb-5 flex justify-center">
        <input
          type="text"
          placeholder="Search Pokémon..."
          className="border border-red-500 rounded-lg p-2 w-1/2 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="ml-2 bg-red-500 text-white rounded-lg px-4 py-2 shadow-md hover:bg-red-600 transition"
        >
          Search
        </button>
      </form>

      {/* Display Search Result if Available */}
      {searchResult ? (
        <div className="flex justify-center flex-col">
          <div
            key={searchResult.name}
            className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center transition transform hover:scale-105 mb-5"
          >
            <img
              src={searchResult.sprites.front_default}
              alt={searchResult.name}
              className="w-24 h-24 mb-2"
            />
            <h2 className="text-xl font-semibold capitalize text-gray-800">
              {searchResult.name}
            </h2>
            <p className="text-gray-600">#{searchResult.id}</p>
          </div>
          <button
            onClick={handleBackToHome}
            className="mt-4 bg-blue-500 text-white rounded-lg px-4 py-2 shadow-md hover:bg-blue-600 transition"
          >
            Back to Home
          </button>
        </div>
      ) : loading && page === 1 ? (
        <div className="flex justify-center mt-4">
          <Loader />
        </div>
      ) : (
        <InfiniteScroll
          dataLength={data.length}
          next={fetchData}
          hasMore={hasMore}
          loader={
            <div className="flex justify-center mt-4">
              <Loader />
            </div>
          }
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((pokemon, index) => (
              <div
                key={pokemon.name}
                className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center transition transform hover:scale-105"
              >
                {img[index] && (
                  <img
                    src={img[index]}
                    alt={pokemon.name}
                    className="w-24 h-24 mb-2"
                  />
                )}
                <h2 className="text-xl font-semibold capitalize text-gray-800">
                  {pokemon.name}
                </h2>
                <p className="text-gray-600">#{index + 1}</p>
              </div>
            ))}
          </div>
        </InfiniteScroll>
      )}

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-blue-500 text-white rounded-full p-3 shadow-md hover:bg-blue-600 transition"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default Home;
