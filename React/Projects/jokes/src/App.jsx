import Main from "./modules/Main";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

function App() {
  const [categories, setCategories] = useState(["Dark"]);
  const [amount, setAmount] = useState(1);
  const [btnClicked, setBtnClicked] = useState(0);
  const [joke, setJoke] = useState([]);
  const [showFavourites, setShowFavourites] = useState(false);
  const [favourites, setFavourites] = useState(() => {
    const savedFavourites = localStorage.getItem('favourites');
    return savedFavourites ? JSON.parse(savedFavourites) : [];
  });

  const fetchJokes = async () => {
    const categoryString = categories.length > 0 ? categories.join(',') : "Any";
    const url = `https://v2.jokeapi.dev/joke/${categoryString}?amount=${amount}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["joke", btnClicked],
    queryFn: fetchJokes,
    staleTime: Infinity,
    cacheTime: Infinity
  });

  const handleFavouriteJokes = (joke) => {
    setFavourites((prevFavourites) => {
      if (!prevFavourites.some(fav => fav.id === joke.id)) {
        const updatedFavourites = [...prevFavourites, joke];
        localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
        return updatedFavourites;
      }
      return prevFavourites;
    });
  };

  const toggleView = () => {
    setShowFavourites(!showFavourites);
  };

  useEffect(() => {
    if (data) {
      if (amount > 1 && data.jokes) {
        setJoke(data.jokes.map(j => (
          <div key={j.id} onClick={() => handleFavouriteJokes(j)} style={{ cursor: 'pointer' }}>
            {j.type === 'single' ? <p>{j.joke}</p> : (
              <p>
                {j.setup}
                <br />
                {j.delivery}
              </p>
            )}
          </div>
        )));
      } else {
        if (data.type === 'single') {
          setJoke(
            <div onClick={() => handleFavouriteJokes(data)} style={{ cursor: 'pointer' }}>
              <p>{data.joke}</p>
            </div>
          );
        } else if (data.type === 'twopart') {
          setJoke(
            <div onClick={() => handleFavouriteJokes(data)} style={{ cursor: 'pointer' }}>
              <p>
                {data.setup}
                <br />
                {data.delivery}
              </p>
            </div>
          );
        }
      }
    }
  }, [data, btnClicked]);

  useEffect(() => {
    console.log(favourites);
  }, [favourites]);

  return (
    <>
      <Main
        categories={categories}
        setCategories={setCategories}
        amount={amount}
        setAmount={setAmount}
        btnClicked={btnClicked}
        setBtnClicked={setBtnClicked}
        joke={joke}
        isLoading={isLoading}
        isError={isError}
        favourites={favourites}
        showFavourites={showFavourites}
        toggleView={toggleView}
        setFavourites={setFavourites}
      />
    </>
  );
}

export default App;
