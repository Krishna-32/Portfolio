import "./Main.scss";

const Main = (props) => {
    function handleValueChange(e) {
    props.setAmount(e.target.value);
    }

    function handleCategoryChange(e) {
    const value = e.target.value;
    if (e.target.checked) {
        props.setCategories([...props.categories, value]);
    } else {
        props.setCategories(
        props.categories.filter((category) => category !== value)
        );
    }
    }

    function handleBtnClick() {
    props.setBtnClicked((p) => p + 1);
    }

    function remove(index){
        const updatedFavourites = props.favourites.filter((_, i) => i!==index);
        props.setFavourites(updatedFavourites);
        localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
    }

    return (
    <div className="container">

        <div className="header">
        {!props.showFavourites && (
            <li>
            <strong>Select Category:</strong>
            <span>
                <input
                type="checkbox"
                id="Misc"
                value={"Miscellaneous"}
                onChange={handleCategoryChange}
                />
                <label htmlFor="Misc">Misc</label>

                <input
                type="checkbox"
                id="Dark"
                value={"Dark"}
                onChange={handleCategoryChange}
                checked={props.categories.includes("Dark")}
                />
                <label htmlFor="Dark">Dark</label>

                <input
                type="checkbox"
                id="Pun"
                value={"Pun"}
                onChange={handleCategoryChange}
                />
                <label htmlFor="Pun">Pun</label>

                <input
                type="checkbox"
                id="Spooky"
                value={"Spooky"}
                onChange={handleCategoryChange}
                />
                <label htmlFor="Spooky">Spooky</label>
            </span>
            </li>
        )}
        <button
            className={`toggle-btn ${props.showFavourites ? 'center-btn' : ''}`}
            onClick={props.toggleView}
        >
            {props.showFavourites ? "🏚️" : "❤️"}
        </button>
        </div>

        {props.showFavourites ? (
        <div className="favourites">
            <h2>Favourites</h2>
            {props.favourites.length > 0 ? (
            props.favourites.map((j, index) => (
                <div key={index} onClick={() => remove(index)}>
                {j.type === "single" ? (
                    <p>{j.joke}</p>
                ) : (
                    <p>
                    {j.setup}
                    <br />
                    {j.delivery}
                    </p>
                )}
                </div>
            ))
            ) : (
            <p>There aren't any favourites yet.</p>
            )}
        </div>
        ) : (
        <>
            <div className="body">
            <li>
                <strong>Amount of Joke(s):</strong>
                <input
                type="number"
                min={1}
                max={10}
                value={props.amount}
                onChange={handleValueChange}
                />
            </li>
            </div>

            <div className="result">
            <button onClick={handleBtnClick}>Generate</button>
            </div>

            <div className="response">
            {props.isLoading ? (
                <div>
                <p>Loading...</p>
                </div>
            ) : props.isError ? (
                <div>
                <p>Error loading jokes.</p>
                </div>
            ) : (
                props.joke
            )}
            </div>
        </>
        )}
    </div>
    );
};

export default Main;
