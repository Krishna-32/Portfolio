import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

const Logic = (props) => {
    const [search, setSearch] = useState('');
    const [error, setError] = useState(null);
    const [json, setJson] = useState(null);
    const [topAnime, setTopAnime] = useState(null);
    const debouncedSearch = useDebounce(search, 500);

    // Fetch Anime
    const fetchAnime = (query) => {
        fetch(`https://api.jikan.moe/v4/anime?q=${query}&sfw`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Data not found :(")
            }
            return response.json()
        })
        .then((resJson) => {
            console.log(resJson);
            setJson(resJson)
            // console.log(json)
            setError(null)
        })
        .catch((err) => {
            setError(err.message);
            setJson(null);
        });
    }

    useEffect(() => {
        if (debouncedSearch) {
            fetchAnime(debouncedSearch);
        }

        else{
            fetchTopAnime();            
        }
    }, [debouncedSearch]);

    const fetchTopAnime = () => {
        fetch(`https://api.jikan.moe/v4/top/anime`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Data not found :(")
                }
                return response.json()
            })
            .then((resJson) => {
                setTopAnime(resJson)
                console.log("#",topAnime)
                setError(null)
            })
            .catch((err) => {
                setError(err.message);
                setTopAnime(null);
            });
    }

    function handleSearchChange(e){
        setSearch(e.target.value)
    }

    return(
    <>
        {props.renderValue(search, handleSearchChange, error, json, topAnime)}
    </>
    )
}

export default Logic;