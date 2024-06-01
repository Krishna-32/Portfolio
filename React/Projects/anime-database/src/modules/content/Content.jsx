import styles from "./Content.module.css"

function Content(props){

    return(
        <>
            <h1 className={styles.content}>{props.title}</h1>

            <div className={styles.container}>
                {props.json?.data?.map((anime) => (
                    <li key={anime.mal_id}>
                        <img onClick={() => window.open(anime.url, '_blank')} className={styles.contentImg} src={anime.images.jpg.image_url} alt={anime.title} />
                        <br />
                        <strong>{anime.title}</strong>
                    </li>
                ))}
            </div>
        </>
    )
}

export default Content;