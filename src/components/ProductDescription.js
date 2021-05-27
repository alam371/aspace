import Header from "./Header";
import Footer from "./Footer";
import styles from "./ProductItem.module.css";
import {Link} from "react-router-dom";

function ProductDescription({ items }) {
    return  (
        <>
            <Header />
            <div className={styles.productDescriptionWrapper}>
                {console.log('items', items)}
                {console.log('items type', typeof items)}
                {items.map((item) => {
                    return <li key={item.date}>
                        {console.log('ITEM!!!!!!', item)}
                        <h2>{item.title}</h2>
                        {item.media_type === 'video'
                            ? <video width="250" controls className={styles.productVideo}>
                                <source src={item.url} type="video/mp4"></source></video>
                            : <img src={item.url} alt={item.title} className={styles.productImg}/>
                        }
                        <p className={styles.productExplain} >{item.explanation}</p>
                        <div className={styles.priceWrapper}>
                            <span>₿</span><p>123000.00</p>
                        </div>
                        <div className={styles.addToCartWrapper}>
                            <Link to="/">Back to Previous Page</Link>
                            <button className={styles.addToCart}>Buy Item</button>
                        </div>
                    </li>
                })}
            </div>
            <Footer />
        </>
    )
}

export default ProductDescription;