import Header from "./Header";
import Footer from "./Footer";
import styles from "./About.module.css"


function About() {
    return (
        <>
            <Header/>
            <h1 className={styles.titleText}>About</h1>
            <div class={styles.aboutWrapper}>
                <p>
                    <strong>The Weyland-Yutani Corporation</strong>, often shortened to Weyland-Yutani and commonly referred to as Wey-Yu or simply <strong>"The Company"</strong>. Weyland-Yutani is primarily a technology supplier, manufacturing synthetics, spaceships and computers for a wide range of industrial and commercial clients, making them a household name. Weyland-Yutani also has numerous non-manufacturing interests; the company has extensive assets in interplanetary shipping and transport, and is one of the corporations that operates human colonies outside the solar system, through the Extrasolar Colonization Administration.
                </p>
                <p>
                    The company also has a seat on the review board of the Interstellar Commerce Commission. Our main offices are in Tokyo, London, San Francisco, the Sea of Tranquillity on Luna and on Thedus.
                </p>
            </div>
            <Footer/>
        </>
    )

}

export default About;