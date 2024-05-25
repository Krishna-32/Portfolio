import styles from './Navbar.module.css'

function Navbar(){
    return(
        <>
            <div className={styles.container}>
                <img src="/pngegg.png" alt="" />

                <h1>
                    Zoro.to
                </h1>
            </div>
        </>
    )
}

export default Navbar;