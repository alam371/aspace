import styles from './Cart.module.css'
import Header from "./Header";
import Footer from "./Footer";

function Cart() {
    return (
        <>
            <Header/>
                <div className={styles.CartWrapper}>
                    <h1 className={styles.titleText}>Shopping Cart is empty</h1>
                    {/*<h2>Your Cart</h2>*/}
                    <div className={styles.shoppingWrapper}>
                        <div className={styles.itemsBuy}>
                            <li>One</li>
                            <li>Two</li>
                        </div>
                        <aside className={styles.orderSummary}>
                            <h2>Order Summary</h2>
                            <p>Total</p>
                            <span>₿</span><p>12345</p>
                        </aside>
                    </div>
                </div>
            <Footer/>
        </>

    )
}

export default Cart;