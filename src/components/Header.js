import styles from './Header.module.css';
import logo from '../logo.jpeg';
import { Link } from "react-router-dom";
import { useState } from 'react';


function Header({ count }) {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleClickLogin = (evt) => {
        evt.preventDefault()
        console.log('clicked');
        setLoggedIn(!loggedIn);
    }

    return(
        <header className={styles.header}>

            <nav className={styles.mainNav}>
                <Link to="/"><img src={logo} alt="logo" className={styles.logo}/></Link>

                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/about">About</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/cart">Cart</Link>
                </ul>
                <div className={styles.counterWrapper}>
                    <button onClick={handleClickLogin}>{loggedIn ? 'Logout' : 'Login'}</button>
                    <div className={styles.cartWrapper}>
                        <p>CART:</p><span>{count}</span>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Header;