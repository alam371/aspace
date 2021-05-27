import styles from './ProductItem.module.css';

function ProductItem({ items, handleClick }) {
    return (
        <>
            <div className={styles.productItemWrapper}>
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
                            <button className={styles.addToCart} onClick={handleClick}>Buy Now</button>
                        </div>
                    </li>
                })}

                {/*{Object.entries(items).forEach((item, index) => {*/}
                {/*    return <li key={item[1].date}>*/}
                {/*        {console.log('ITEM!!!!!!', item[1])}*/}
                {/*        <h2>{item[1].title}</h2>*/}
                {/*        {item[1].media_type === 'video'*/}
                {/*            ? <video width="250" controls className={styles.productVideo}>*/}
                {/*                <source src={item[1].url} type="video/mp4"></source></video>*/}
                {/*            : <img src={item[1].url} alt={item[1].title} className={styles.productImg}/>*/}
                {/*        }*/}
                {/*        <p className={styles.productExplain} >{item[1].explanation}</p>*/}
                {/*        <button className={styles.addToCart}>Buy Item</button>*/}
                {/*    </li>*/}
                {/*})}*/}

                {/*{mockData.map((stuff) => {*/}
                {/*    {console.log('mockDATA stuff', stuff)}*/}
                {/*    return <li key={stuff.date}>*/}

                {/*        <h2>{stuff.title}</h2>*/}
                {/*        {stuff.media_type === 'video'*/}
                {/*            ? <video width="250" controls className={styles.productVideo}>*/}
                {/*                <source src={stuff.url} type="video/mp4"></source></video>*/}
                {/*            : <img src={stuff.url} alt={stuff.title} className={styles.productImg}/>*/}
                {/*        }*/}
                {/*        <p className={styles.productExplain} >{stuff.explanation}</p>*/}
                {/*        <div className={styles.priceWrapper}>*/}
                {/*            <span>₿</span><p>123000.00</p>*/}
                {/*        </div>*/}
                {/*        <button className={styles.addToCart}>Buy Item</button>*/}
                {/*    </li>*/}
                {/*})}*/}

            </div>
        </>
    )

}

export default ProductItem;