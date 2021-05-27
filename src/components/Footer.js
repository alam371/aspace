import styles from './Footer.module.css';

function Footer() {
    return(
        <footer className={styles.footer}>
            <div>
                <p>© 2021 Aspace</p>
                <p>Subsidiary of <br></br>Weyland-Yutani CORP</p>
                <h6>Unsplash Photo by Vincent Beneche</h6>
            </div>
            <div>
                <h3>Help</h3>
                <ul>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Subscribe</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
            <div>
                <h3>Company</h3>
                <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Galactic Legal</a></li>
                    <li><a href="">Terms of Service</a></li>
                </ul>
            </div>
            <div>
                <h3>Social</h3>
                <ul>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">Twitter</a></li>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Cryptogram</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;