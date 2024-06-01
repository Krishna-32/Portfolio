import styles from "./Trending.module.css"

function Trending(props){

    return(
        
        <>
            <h1 className={styles.trending}>{props.title}</h1>

            <div className={styles.container}>
            
                {props.topAnime?.data?.map((anime) => (
                        <li key={anime.mal_id}>
                            <img onClick={() => window.open(anime.url, '_blank')} className={styles.trendingImg} src={anime.images.jpg.image_url} alt={anime.title} />
                            <br />
                            <strong>{anime.title}</strong>
                        </li>
                    ))}

            </div>
        </>
    )
}

export default Trending;

