import styles from "./Trending.module.css"

function Trending(props){

    return(
        <>
            <h1 className={styles.trending}>{props.title}</h1>

            <div className={styles.container}>
            
                <li>
                    <img className={styles.trendingImg} src="./public/R (1).jpeg" alt="anime-poster" />
                    <br />
                    <strong>One Piece</strong>
                </li>

                <li>
                    <img className={styles.trendingImg} src="./public/R (1).jpeg" alt="anime-poster" />
                    <br />
                    <strong>One Piece</strong>
                </li>

                <li>
                    <img className={styles.trendingImg} src="./public/R (1).jpeg" alt="anime-poster" />
                    <br />
                    <strong>One Piece</strong>
                </li>

                <li>
                    <img className={styles.trendingImg} src="./public/R (1).jpeg" alt="anime-poster" />
                    <br />
                    <strong>One Piece</strong>
                </li>

                <li>
                    <img className={styles.trendingImg} src="./public/R (1).jpeg" alt="anime-poster" />
                    <br />
                    <strong>One Piece</strong>
                </li>
            </div>
        </>
    )
}

export default Trending;