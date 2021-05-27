import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home({ count , handleClick }) {

    return (
        <>
            <Header count={count} />
            <div className={styles.heroImage}>
                <div className={styles.heroText}>
                    <h1>Aspace Shop</h1>
                    <p>Where you can get all your stellar paraphernalia. 👽</p>
                    <button className={styles.shopBtn}><Link to="/shop" >Shop</Link></button>
                </div>
            </div>
            <Main handleClick={handleClick}/>
            <Footer/>
        </>
    )

}

export default Home;