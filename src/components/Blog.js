import Header from "./Header";
import Footer from "./Footer";
import styles from "./Blog.module.css"


function Blog() {
    return (
        <>
            <Header/>
            <h1 className={styles.titleText}>Blog</h1>
            <div className={styles.blogWrapper}>
                <p>
                    "Ash, that transmission... Mother's deciphered part of it. It doesn't look like an S.O.S."
                </p>
                <p>
                    "I say we take off and nuke the entire site from orbit. It's the only way to be sure."
                </p>
                <p>
                    Final report of the commercial starship Nostromo, third officer reporting. The other members of the crew — Kane, Lambert, Parker, Brett, Ash and Captain Dallas — are dead. Cargo and ship destroyed. I should reach the frontier in about six weeks. With a little luck, the network will pick me up. This is Ripley, last survivor of the Nostromo, signing off."
                    <br></br>Ripley
                </p>

            </div>
            <Footer/>
        </>
    )

}

export default Blog;