import styles from "./Searchbar.module.css"

function Searchbar(){
    return(
        <>
        <div className={styles.container}>
            <div className={styles.searchbar}>
                <li>
                    <label htmlFor="search-bar">Search</label>
                    <br />
                    <input type="search" id="search-bar" placeholder="Anime"/>
                </li>

                <li>
                    <label htmlFor="genre">Genres</label>
                    <br />  
                    <select id="genre">
                        <option value="all">all</option>
                    </select>
                </li>

                <li>
                    <label htmlFor="year">Year</label>
                    <br />
                    <select id="year">
                        <option value="2024">2024</option>
                    </select>
                </li>

                <li>
                    <label htmlFor="format">Format</label>
                    <br />
                    <select id="format">
                        <option value="all">all</option>
                    </select>
                </li>

                <li>
                    <label htmlFor="category">Category</label>
                    <br />
                    <select id="category">
                        <option value="anime">anime</option>
                    </select>
                </li>
                

            </div>
        </div>
        </>
    )
}

export default Searchbar;